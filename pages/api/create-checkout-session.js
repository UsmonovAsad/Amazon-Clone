const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    const { items, email } = req.body;

    const transformedItems = items.map(({title, image, description, quantity,price}) => ({
        description: description,
        quantity: quantity,
        price_data: {
            currency: "gbp",
            unit_amount: (price * quantity) * 100,
            product_data: {
                name: title,
                images: [image]
            },
        }
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_rates: ["shr_1KVZl3BM9eMUateyepfRckpP"],
        shipping_address_collection: {
            allowed_countries: ["GB","US","CA"]
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(({image}) => image))
        }
    });

    res.status(200).json({ id: session.id });
}
