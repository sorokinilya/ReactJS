// import { deletePost, hideModal } from '../actions';
// import {connect} from "react-redux";
// import {Button, Dialog, DialogActions, DialogTitle} from "material-ui";
// import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import PropTypes from 'prop-types';

// const DeletePostModal = ({ post, dispatch }) => (
//     <Dialog open={true}>
//         <DialogTitle>Delete post {post.name}?</DialogTitle>
//         <DialogActions>
//             <button onClick={() => {
//                 dispatch(deletePost(post.id)).then(() => {
//                     dispatch(hideModal());
//                 });
//             }}>
//                 Yes
//             </button>
//             <button onClick={() => dispatch(hideModal())}>
//                 Nope
//             </button>
//         </DialogActions>
//     </Dialog>
// )

// export default connect(
//     (state, ownProps) => ({
//         post: state.postsById[ownProps.postId]
//     })
// )(DeletePostModal)
//


// export default function EditForm() {
//     return (
//         <React.Fragment>
//             <Typography variant="h6" gutterBottom>
//                 Payment method
//             </Typography>
//             <Grid container spacing={3}>
//                 <Grid item xs={12} md={6}>
//                     <TextField required id="cardName" label="Name on card" fullWidth />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField required id="cardNumber" label="Card number" fullWidth />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField required id="expDate" label="Expiry date" fullWidth />
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                     <TextField
//                         required
//                         id="cvv"
//                         label="CVV"
//                         helperText="Last three digits on signature strip"
//                         fullWidth
//                     />
//                 </Grid>
//                 <Grid item xs={12}>
//                     <FormControlLabel
//                         control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//                         label="Remember credit card details for next time"
//                     />
//                 </Grid>
//             </Grid>
//         </React.Fragment>
//     );
// }