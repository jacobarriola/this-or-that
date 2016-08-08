export default function() {
  this.get('/posts', function() {
    return {
      data: [
            {
            "type": "posts",
            "id": 90,
            "attributes":
              {
                "title": "Foodz",
                "timestamp": "2016-08-05 16:16:55",
                "image_url_1": "http://this-or-that.s3-us-west-1.amazonaws.com/wp-content/uploads/2016/08/05091656/foodz-1.jpg",
                "image_url_2": "http://this-or-that.s3-us-west-1.amazonaws.com/wp-content/uploads/2016/08/05091657/foodz-2.jpg",
                "frame_type": "1",
                "tags": [
                {
                "tag_id": "15",
                "tag_name": "tag1",
                "tag_slug": "tag1"
                },
                {
                "tag_id": "16",
                "tag_name": "tag2",
                "tag_slug": "tag2"
                }
                ],
                "votes_image_1": "206",
                "votes_image_2": "53",
                "number_of_comments": "347",
                "author_id": "5",
                "author_name": "Justin Zito",
                "author_avatar": "http://0.gravatar.com/avatar/c8067c200181a68cddf6a64eb71f2acf?s=100&r=g",
                "author_followers": "12345",
                "author_posts": "9"
              }
            },
            {
            "type": "posts",
            "id": 86,
            "attributes":
              {
                "title": "Watchesssss",
                "timestamp": "2016-07-23 17:05:51",
                "image_url_1": "http://this-or-that.s3-us-west-1.amazonaws.com/wp-content/uploads/2016/07/23100551/watchesssss-1.jpg",
                "image_url_2": "http://this-or-that.s3-us-west-1.amazonaws.com/wp-content/uploads/2016/07/23100553/watchesssss-2.jpg",
                "frame_type": "1",
                "tags": [
                {
                "tag_id": "15",
                "tag_name": "tag1",
                "tag_slug": "tag1"
                },
                {
                "tag_id": "16",
                "tag_name": "tag2",
                "tag_slug": "tag2"
                }
                ],
                "votes_image_1": "376",
                "votes_image_2": "328",
                "number_of_comments": "984",
                "author_id": "5",
                "author_name": "Justin Zito",
                "author_avatar": "http://0.gravatar.com/avatar/c8067c200181a68cddf6a64eb71f2acf?s=100&r=g",
                "author_followers": "12345",
                "author_posts": "9"
              }
            },

          ]
      };
    });
  }
