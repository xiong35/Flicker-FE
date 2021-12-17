type OpenNewTabProps = {
  base?: string;
  path: string;
  query?: string;
};

export const openNewTab = (props: OpenNewTabProps) => {
  const {
    base = window.location.protocol + "//" + window.location.host,
    path,
    query = "",
  } = props;
  const url = `${base}${path}${query && "?"}${query}`;
  window.open(url, "_blank");
};
