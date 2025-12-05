import jwt from 'jsonwebtoken'

const protect = async (req,res , next)=>{
    let token = req.headers.authorization;
    if (!token) {
        console.error('Auth failed: missing Authorization header');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Support `Bearer <token>` as well as raw token
    if (token.startsWith('Bearer ')) {
        token = token.split(' ')[1];
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.error('Auth failed: token verify error', error && error.message);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

export default protect