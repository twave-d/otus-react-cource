import React, { FC, PropsWithChildren} from 'react'
import {
  useLocation,
  Navigate,
} from "react-router-dom";

export interface ProtectPathProps extends PropsWithChildren<unknown> {
  condition: boolean
  to: string
}

export const ProtectPath: FC<ProtectPathProps> = ({ children, condition, to }) => {

  let location = useLocation();

  if (!condition) {
    <Navigate to={to} state={{ from: location }} replace />
  }

  return children
}