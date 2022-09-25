const jwt = require('jsonwebtoken')

module.exports = {
    generateToken: async (user) => {
        const token = jwt.sign(
            {
                id: user.id,
                name: user.user_game_biodata.name,
                role: user.role,
                username: user.username,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )

        return token;
    },
    getUserVerified: (token) => {
        if (token) {
            try {
                verify = jwt.verify(token, process.env.JWT_SECRET)
                return verify
            } catch (err) {
                return false
            }
        }

        return false
    }
}
