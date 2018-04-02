/**
 * Returns a list of tags that occur in videos.
 * @param videos meta data as outlined in videos.js
 * @returns {Array} of tags
 */
export let tagParser = function(videos) {
  console.log('in tag parser');
  let tags = [];
  videos.forEach((metaData) => {
    let videoTags = metaData['tags'];
    videoTags.forEach((tag) => {
      if (!tags.includes(tag.toLowerCase())) {
        tags.push(tag.toLowerCase());
      }
    });
  });
  return tags;
};

/**
 * Returns a list of categories that occur in videos.
 * @param videos meta data as outlined in videos.js
 * @returns {Array} of categories
 */
export let categoryParser = function(videos) {
  console.log('in category parser');
  let categories = [];
  videos.forEach((metaData) => {
    let videoCategories = metaData['category'];
    videoCategories = videoCategories.split('->');
    videoCategories.forEach((cat) => {
      if (!cat.includes(cat.toLowerCase())) {
        categories.push(cat.toLowerCase());
      }
    });
  });
  return categories;
};

export let categoryTree = {
  'Junior': {
    'History': {
      'isLeaf': true
    },
    'Science': {
      'isLeaf': true,
      'Biology': {
        'isLeaf': true
      }
    },
    'Health': {
      'Personal Development': {
        'isLeaf': true
      }
    },
    'English': {
      'isLeaf': true,
      'Drama': {
        'isLeaf': true
      },
      'Culture': {
        'isLeaf': true,

        'USA': {
          'isLeaf': true
        }
      }
    },
    'Geography': {
      'isLeaf': true,
      'Aboriginal Studies': {
        'isLeaf': true
      }
    }
  },
  'Senior': {
    'Languages': {
      'isLeaf': true
    },
    'Science': {
      'isLeaf': true,
      'Phychology' : {
        'isLeaf': true
      }
    },
    'Civics & Citizenship': {
      'isLeaf': true
    },
    'English': {
      'isLeaf': true,
      'Journalism': {
        'isLeaf': true
      }
    },
    'History': {
      'isLeaf': true,
      'Ancient' : {
        'China': {
          'isLeaf': true
        }
      }
    },
    'Geography': {
      'isLeaf': true
    }
  }
};