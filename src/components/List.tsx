const List = <T,>({
  children,
  data,
}: {
  data: T[];
  children: (payload: T) => JSX.Element;
}) => {
  return <>{data.map(children)}</>;
};

export default List;
