
import * as Yup from 'yup';
const SHOP_VALIDATION_SCHEMA = Yup.object().shape({
  image: Yup.string().label('Image'),
  name: Yup.string().required().label('Name'),
});

export {SHOP_VALIDATION_SCHEMA};
