import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value) => {
  const breakpointValue = fullConfig.theme.screens[value];
  return parseInt(breakpointValue, 10);
};

export const getCurrentBreakpoint = () => {
  let currentBreakpoint;
  let biggestBreakpointValue = 0;

  for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
    const breakpointValue = getBreakpointValue(breakpoint);

    if (
      breakpointValue > biggestBreakpointValue &&
      window.innerWidth >= breakpointValue
    ) {
      biggestBreakpointValue = breakpointValue;
      currentBreakpoint = breakpoint;
    }
  }

  return currentBreakpoint;
};