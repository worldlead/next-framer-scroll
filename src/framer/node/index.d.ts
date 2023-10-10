import * as React from "react"
export interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  id?: string
  width?: any
  height?: any
  layoutId?: string
  "variant"?: 'Expanded' | 'Hover' | 'Node-XL' | 'Node-LG' | 'Node-MD' | 'Node-SM' | 'Node-XS' | 'Variant 8' | 'Line' | 'Variant 10' | 'Variant 13'
  "decision Title"?: string
  "decision Description"?: string
  "decision Index"?: string
  "decision Type"?: 'Input' | 'Slider' | 'Choice' | 'Boolean'
  "choice"?: 'Option 1' | 'Option 2' | 'Option 3'
  "choice 1"?: string
  "choice 2"?: string
  "choice 3"?: string
  "scale X1"?: string
  "scale X2"?: string
  "slider Value"?: number
  "streaming"?: boolean
  "input"?: string
  "boolean Toggle"?: boolean
  "color"?: string
  " Dependency Index 1"?: string
  "dependency Index 2"?: string
  "dependency Index 3"?: string
  "dependency Visible"?: boolean
}
const Component = (props: Props) => any
export default Component
type Breakpoint = 'Desktop' | 'Tablet' | 'Mobile'
Component.Responsive = (props: Omit<Props, 'variant'> & {variants: Record<Breakpoint, ComponentPropsWithoutRef<Component>['variant']>}) => any
