import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer R2LjJS4EaM9XIGELcuGLYbPy99tUVczcmVRbS8wb9vGT4hnTNzZ_UlJeJubpFq3fcc9q_AY1bjX-0JlieFUY7JkeTxSubaJvQmCBLy6KjeNKPrbooIttlX4BnpQZX3Yx'
    }
});