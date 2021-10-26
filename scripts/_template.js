const tsxTemplate = `
import "./index.scss";

import { useSetup } from "./hooks";


type {COMP_NAME}Props = {
  
};

function {COMP_NAME}(props: {COMP_NAME}Props) {
  const {} = props;
  const {} = useSetup();

  return (
    <div className="{KEBAB_NAME}">
    </div>
  );
}

export default {COMP_NAME};
`;

const scssTemplate = `
.{KEBAB_NAME} {

}
`;

const hooksTemplate = `
export function useSetup() {
  
}
`;

module.exports = {
  tsxTemplate,
  scssTemplate,
  hooksTemplate,
};
