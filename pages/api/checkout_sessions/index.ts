import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_TEST_KEY, { apiVersion: null });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const priceId = 'price_1HsC90IJU6ITbBlcI2wZUnS0';

  if (req.method === 'POST') {
    try {
      const params: Stripe.Checkout.SessionCreateParams = {
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price: priceId,
            quantity: 1
          },
        ],
        subscription_data: {
          trial_period_days: 30
        },
        success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
      }
      const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

      res.status(200).json(checkoutSession);
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not Allowed');
  }
}