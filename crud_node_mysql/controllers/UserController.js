const UserTable = require('../models/UserTable')

class Crud {
    static async Create(req, res) {
        const { artist, song, album } = req.body

        const create = await UserTable.create({
            artist,
            song,
            album
        })

        res.status(200).json({ msg: "data insert sucessufuly" })
    }

    static async Read(req, res) {
        const read = await UserTable.findAll()

        res.status(200).json({ read })
    }

    static async Update(req, res) {
        const { artist, song, album} = req.body

        const update = await UserTable.findOne({
            where: {
                artist
            }
        });

        update.set({
            song,
            album
        });

        await update.save();

        res.status(200).json({ msg: "changed data" })
    }

    static async Delete(req, res) {
        const { artist, song, album } = req.body

        const del = await UserTable.findOne({
            where: {
                artist,
                song,
                album
            }
        })

        del.destroy()

        res.status(200).json({ msg: "deleted data" })
    }
}

module.exports = Crud