import { useMemo } from "react";

import { SvgProps } from "./";

/** 底部导航栏 首页 界面 icon */
export default function NavHome({ className, onClick }: SvgProps) {
  return useMemo(
    () => (
      <svg
        className={className}
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="23006"
        data-spm-anchor-id="a313x.7781069.0.i10"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="200"
        height="200"
        onClick={onClick}
      >
        <path
          d="M592.08817778 921.09027555a30.25692445 30.25692445 0 0 1-30.22848-30.2227911V690.64817778h-99.73077333v200.21930667c-0.21048889 16.37034667-13.76597333 29.75061333-30.21710223 29.75061333-16.90510222-0.20935111-30.01230222-13.31655111-30.22165333-29.83708445V688.70826667c0-32.26055111 26.24284445-58.51022222 58.50453333-58.51022222h103.58784c32.26737778 0 58.51591111 26.24853333 58.51591111 58.51022222v202.15352888a30.25692445 30.25692445 0 0 1-30.21027555 30.22848z"
          p-id="23008"
          data-spm-anchor-id="a313x.7781069.0.i9"
          className="primary-l-fill"
        ></path>
        <path
          d="M221.01333333 931.71484445a30.25123555 30.25123555 0 0 1-30.21596444-30.22165334v-307.07484444H128.02275555a30.36728889 30.36728889 0 0 1-9.31498666-1.47456c-6.56497778-2.12536889-23.33582222-10.03633778-36.92657778-37.33504-13.04348445-26.17344-6.65827555-50.31367111 2.77276444-63.03061334a29.75288889 29.75288889 0 0 1 2.90702223-3.37351111L491.19004445 85.46986667a30.04757333 30.04757333 0 0 1 21.36746666-8.84963556c8.05660445 0 15.62965333 3.13457778 21.33333334 8.81436444L648.89742222 200.01336889a30.25692445 30.25692445 0 0 1 0.07623111 42.73493333 30.04188445 30.04188445 0 0 1-21.40842666 8.89059556 30.03619555 30.03619555 0 0 1-21.33333334-8.81436445l-93.63797333-93.28867555-384.43121778 384.43235555h92.85176889a30.25692445 30.25692445 0 0 1 30.22165334 30.22165334v307.07484444h523.45514666V564.18986667a30.25692445 30.25692445 0 0 1 30.22279111-30.22165334h77.90364445L740.56590222 392.26481778a30.40824889 30.40824889 0 0 1-8.88945777-21.40842667V247.40977778c0-16.66161778 13.55548445-30.22279111 30.2227911-30.22279111S792.12088889 230.74247111 792.12088889 247.40977778v110.90375111l143.89475556 143.33496889a30.24213333 30.24213333 0 0 1 4.58410666 5.85955555c2.75569778 4.59662222 15.88565333 28.73685333 4.32241778 54.21169778-11.62808889 25.65006222-38.59911111 31.38787555-43.88864 32.27306667a30.21596445 30.21596445 0 0 1-5.02215111 0.41984h-60.87566223v307.07484444a30.25123555 30.25123555 0 0 1-30.20458666 30.22848H221.01447111z"
          p-id="23007"
          data-spm-anchor-id="a313x.7781069.0.i11"
          className="on-bg-l-fill"
        ></path>
      </svg>
    ),
    [onClick]
  );
}
