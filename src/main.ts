import { getActionInputs } from './gha';

export default () =>
  new Promise<void>((resolve) => {
      const { name, repo } = getActionInputs();
      console.log(`Hello, ${name} from the ${repo} repo!`);
      resolve();
  });
