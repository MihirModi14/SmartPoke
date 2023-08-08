import MessageStyle from "./Message.module.scss";

export const Message = ({ message }: { message: string }) => {
  return <div className={MessageStyle.center}>{message}</div>;
};
