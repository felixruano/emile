import { useState } from 'react';

import getStripe from '@utils/stripe/get-stripe';
import { fetchPostJSON } from '@utils/api-helpers';
import { Button } from '@chakra-ui/react';

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create a checkout session
    const response = await fetchPostJSON('/api/checkout_sessions');

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.
    const stripe = await getStripe();
    const { error } = await stripe?.redirectToCheckout({
      sessionId: response.id,
    })
    console.warn(error.message);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Button colorScheme="indigo" color="white" letterSpacing="widest" type="submit" disabled={loading}>
        Confirm Subscription
      </Button>
    </form>
  )
};

export default CheckoutButton;