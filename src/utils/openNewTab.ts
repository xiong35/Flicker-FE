type OpenNewTabProps = {
  base?: string;
  path: string;
  query?: string;
};

export const openNewTab = (props: OpenNewTabProps) => {
  const { base = "http://localhost:3000", path, query = "" } = props;
  const url = `${base}${path}${query && "?"}${query}`;
  window.open(url, "_blank");
};
