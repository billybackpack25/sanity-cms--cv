import {Card, Stack, Text} from '@sanity/ui'
import {StringInputProps, useFormValue} from 'sanity'
import React from 'react'

type WebsiteCvInfoState = {
  title: string
  message: string
  tone: 'positive' | 'caution'
}

function getWebsiteCvInfoState(isWebsiteCv: boolean | undefined): WebsiteCvInfoState {
  if (isWebsiteCv) {
    return {
      title: 'Main Website CV',
      message: 'This CV is currently set as the main website CV.',
      tone: 'positive',
    }
  }
  return {
    title: 'Set as main CV for your website',
    message:
      'To set this CV as the main website CV, use the Set as Website CV action in the bottom-right menu. Only one CV can be active at a time.',
    tone: 'caution',
  }
}

export function WebsiteCvInfoInput(_: StringInputProps) {
  const isWebsiteCv = useFormValue(['isWebsiteCv']) as boolean | undefined
  const {title, message, tone} = getWebsiteCvInfoState(isWebsiteCv)

  return (
    <Card padding={4} radius={2} shadow={1} tone={tone}>
      <Stack space={3}>
        <Text size={2} weight="bold">
          {title}
        </Text>
        <Text>{message}</Text>
      </Stack>
    </Card>
  )
}
