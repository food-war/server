module.exports = {
  /**
   * @route   GET user/test
   * @desc    test
   * @access  Public
   */
  test: async (req, res) => {
    res.status(200).json({ message: 'test!' });
  }
};
