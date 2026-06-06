router.get('/', async (req, res) => {

    try {

        const usuarios = await Usuario.find();

        res.json(usuarios);

    } catch(error) {

        console.error(error);

        res.status(500).json({
            error: error.message
        });
    }

});