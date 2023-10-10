import * as React from "react"
export interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  id?: string
  width?: any
  height?: any
  layoutId?: string
  "variant"?: 'Multiple Choice' | 'Slider' | 'Boolean' | 'Input'
  "option"?: 'Option 1' | 'Option 2' | 'Option 3'
  "sliider Value"?: number
  "option 1"?: string
  "option 2"?: string
  "choice 1"?: string
  "choice 2"?: string
  "choice 3"?: string
  "streaming"?: boolean
  "title"?: string
  "input"?: string
  "boolean Toggle"?: boolean
}
const Component = (props: Props) => any
export default Component
type Breakpoint = 'Desktop' | 'Tablet' | 'Mobile'
Component.Responsive = (props: Omit<Props, 'variant'> & {variants: Record<Breakpoint, ComponentPropsWithoutRef<Component>['variant']>}) => any
