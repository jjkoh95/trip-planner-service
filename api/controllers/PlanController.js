/**
 * PlanController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getByTripID: async function(req, res) {
    const tripID = req.params.id;
    const plans = await Plan.find({where: {tripID}});
    return res.status(200).json(plans);
  }
};

