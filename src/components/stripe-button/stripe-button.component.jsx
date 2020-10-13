import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HbspGLVVmaZzLaRXKdZYqhdgWj1Ru1Xc52V08jZYqRYeckBlPLhbVLxD1atVSruEqP3iz5FcmPZhOX9bBK40ACA00UYfwv0Mz';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return <StripeCheckout
        label='Pay Now'
        panelLabel='Pay Now'
        name='CRWN Clothing Ltd.'
        description={`Your total is $${price}`}
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
    />;
};

export default StripeCheckoutButton;
