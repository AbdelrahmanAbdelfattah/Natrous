const Tour = require('./../models/tourModels');

// const tours = JSON.parse(
//   // convert the string to js object
//   fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      stsus: 'success',
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({
      stsus: 'fail',
      message: err,
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find(); // to get the all tours that are existing

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: { tours },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// the create function that create a new document return a promise so we need to make it (await)
// so to do this we will make the function async

exports.createTour = async (req, res) => {
  // async here to allow await
  try {
    const newTour = await Tour.create(req.body); // create a new document
    res.status(201).json({
      status: 'success',
      data: { tour: newTour },
    });
  } catch {
    res.status(400).json({
      status: 'fail',
      message: 'invalid data sent',
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
