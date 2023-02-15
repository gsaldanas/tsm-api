import Singer from '../models/SingerSchema.js';
const getAllSingers = async (req, res) => {
  try {
    const { name } = req.query;
    const singers = await Singer.find();

    if (name?.toLowerCase()) {
      const filteredSingers = singers.filter((singer) =>
        singer.name?.toLowerCase().includes(name?.toLowerCase())
      );
      // const result = filteredSingers.map((singer) =>{
      //   singer.image = `${DOMAIN}/images/${singer.image}`
      // })
      return res.status(200).json(filteredSingers);
    }

    res.status(200).json(singers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingerById = async (req, res) => {
  try {
    const { id } = req.params;
    const singers = await Singer.findById(id);

    res.status(200).json(singers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const postSinger = async (req, res) => {
  try {
    const { name, image, actors, place, episodeCount, startedEpisode } =
      req.body;
    const result = await Singer.create({
      name,
      image,
      actors,
      place,
      episodeCount,
      startedEpisode,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateSinger = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, actors, place, episodeCount, startedEpisode } =
      req.body;
    const result = await Singer.replaceOne(
      { _id: id },
      {
        name,
        image,
        actors,
        place,
        episodeCount,
        startedEpisode,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteSinger = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Singer.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export { getAllSingers, getSingerById, postSinger, updateSinger, deleteSinger };
