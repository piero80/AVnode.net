import { connect } from 'preact-redux';
import {
  fetchCountries,
  userLinkAdd,
  userLinkDelete,
  //userLinkEdit,
  userAboutEdit,
  userAboutDelete,
  userAddressDelete,  
  editUser
} from '../../reducers/actions';
import ProfilePublic from './ProfilePublic';

const mapStateToProps = ({user}) => ({
  user: user,
  initialValues: user//, 
  //submitting: submitting
});

const mapDispatchToProps = (dispatch) => ({
  userLinkAdd: dispatch(userLinkAdd),
  //userLinkDelete: dispatch(userLinkDelete),
  //userLinkEdit: dispatch(userLinkEdit),
  userAboutEdit: dispatch(userAboutEdit),
  userAboutDelete: dispatch(userAboutDelete),
  userAddressDelete: dispatch(userAddressDelete),
  saveProfile: dispatch(editUser),
  fetchCountries: dispatch(fetchCountries)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePublic);
