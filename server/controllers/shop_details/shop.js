import shopSchema from '../../model/shop.js'
import menuSchema from '../../model/menu.js';

const shopController = {
    getAllShops: async (req, res) => {
        try {
            const allShops = await shopSchema.find()
            res.json(allShops)
        } catch (err) {
            res.status(401).json([]);
        }
    },
    getShopItems: async (req, res) => {
        try {
            const menuItems = await menuSchema.find({ shopId: req.params.id })
            res.json(menuItems)
        } catch (err) {
            res.status(401).json([]);
        }
    },
    searchDetails: async (req, res) => {
        try {
            const searchItems = await shopSchema.find({ name: { $regex: req.query.value, $options: 'i' } })
            return res.json(searchItems)
        } catch (err) {
            res.status(401).json([]);
        }
    }
}

export default shopController