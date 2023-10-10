import * as React from "react"
export interface Props {
  children?: React.ReactNode
  style?: React.CSSProperties
  className?: string
  id?: string
  width?: any
  height?: any
  layoutId?: string
  "variant"?: 'right' | 'left'
}
const Component = (props: Props) => any
export default Component
type Breakpoint = 'Desktop' | 'Tablet' | 'Mobile'
Component.Responsive = (props: Omit<Props, 'variant'> & {variants: Record<Breakpoint, ComponentPropsWithoutRef<Component>['variant']>}) => any
