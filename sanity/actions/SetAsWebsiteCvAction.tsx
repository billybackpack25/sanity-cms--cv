import groq from 'groq'
import {DocumentActionComponent, DocumentActionProps, useDocumentOperation} from 'sanity'
import {useCallback} from 'react'
import {useToast} from '@sanity/ui'
import {useClient} from 'sanity'

export const SetAsWebsiteCvAction: DocumentActionComponent = function SetAsWebsiteCvAction(
  props: DocumentActionProps,
) {
  const {id, type, draft, published} = props
  const {patch, commit} = useDocumentOperation(id, type)
  const toast = useToast()
  const client = useClient({apiVersion: '2025-06-26'})

  const handleClick = useCallback(async () => {
    if (!client) {
      toast.push({
        status: 'error',
        title: 'Sanity client not found',
        description: 'This action requires access to the Sanity client.',
      })
      return
    }
    try {
      await client
        .patch({query: groq`*[_type == "cv" && _id != $id]`, params: {id}})
        .set({isWebsiteCv: false})
        .commit()

      patch.execute([{set: {isWebsiteCv: true}}])
      commit.execute()

      toast.push({
        status: 'success',
        title: 'Website CV updated',
        description: 'This CV is now set as the main website CV.',
      })
    } catch (err: any) {
      toast.push({
        status: 'error',
        title: 'Failed to update website CV',
        description: err.message,
      })
    }
  }, [id, patch, commit, toast, client])

  const isActive = (draft?.isWebsiteCv || published?.isWebsiteCv) === true

  return {
    label: isActive ? 'Website CV (Active)' : 'Set as Website CV',
    onHandle: handleClick,
    disabled: isActive,
    tone: isActive ? 'positive' : 'default',
  }
}
