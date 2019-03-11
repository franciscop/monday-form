# Monday-Form

A nice Rect Form library:

```js
import { Form } from 'monday-form';

export default () => (
  <Form onSubmit={data => console.log(data)}>
    <input name="firstname" />
    <input name="lastname" />
    <button>Submit!</button>
  </Form>
);
```
