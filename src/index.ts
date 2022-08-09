import main from './main';
import messages from './messages';

main()
    .then(() => {
        console.log(messages.success('done!'));
    })
    .catch((err: Error) => {
        console.error(messages.error(err.message));
    });
