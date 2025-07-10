import { ArrowLeft, ArrowRight } from "lucide-react";

const IconArrowRight: React.FC<React.ComponentProps<typeof ArrowRight>> = (
  props
) => <ArrowRight {...props} />;

const IconArrowLeft: React.FC<React.ComponentProps<typeof ArrowLeft>> = (
  props
) => <ArrowLeft {...props} />;

export { IconArrowRight, IconArrowLeft };
