import React from 'react';
import { Redirect, useAuth } from 'umi'

export default (props: { children: React.ReactNode; }) => {
  console.log('查看登录态', useAuth())
  const { isLogin } = useAuth();
  if (isLogin) {
    return <div>{props.children}</div>;
  }
  return <Redirect to="/login" />;

}