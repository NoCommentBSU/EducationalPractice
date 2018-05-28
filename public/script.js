'use strict';

(function () {
    let photoPosts = [
        {
            id: '1',
            description: 'sample description 1',
            createdAt: new Date('2018-02-23T23:01:00'),
            author: 'sampleUsername1',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2']
        },
        {
            id: '2',
            description: 'sample description 2',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'sampleUsername1',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '3',
            description: 'sample description 3',
            createdAt: new Date('2018-02-23T23:02:00'),
            author: 'sampleUsername7',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '4',
            description: 'sample description 4',
            createdAt: new Date('2018-02-23T23:07:00'),
            author: 'sampleUsername6',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1']
        },
        {
            id: '5',
            description: 'sample description 5',
            createdAt: new Date('2018-02-23T23:09:00'),
            author: 'sampleUsername6',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '6',
            description: 'sample description 6',
            createdAt: new Date('2018-02-23T23:08:00'),
            author: 'sampleUsername2',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '7',
            description: 'sample description 7',
            createdAt: new Date('2018-02-23T23:10:00'),
            author: 'sampleUsername3',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user2']
        },
        {
            id: '8',
            description: 'sample description 8',
            createdAt: new Date('2018-02-23T23:10:20'),
            author: 'sampleUsername1',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '9',
            description: 'sample description 9',
            createdAt: new Date('2018-02-23T23:14:00'),
            author: 'sampleUsername1',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '10',
            description: 'sample description 10',
            createdAt: new Date('2018-02-23T23:11:00'),
            author: 'sampleUsername2',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user2', 'user3']
        },
        {
            id: '11',
            description: 'sample description 11',
            createdAt: new Date('2018-02-23T23:10:45'),
            author: 'sampleUsername6',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2']
        },
        {
            id: '12',
            description: 'sample description 12',
            createdAt: new Date('2018-02-23T23:20:40'),
            author: 'sampleUsername9',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '13',
            description: 'sample description 13',
            createdAt: new Date('2018-02-23T23:19:00'),
            author: 'sampleUsername14',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2']
        },
        {
            id: '14',
            description: 'sample description 14',
            createdAt: new Date('2018-02-23T23:18:00'),
            author: 'sampleUsername12',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user2', 'user3']
        },
        {
            id: '15',
            description: 'sample description 15',
            createdAt: new Date('2018-02-23T23:17:00'),
            author: 'sampleUsername14',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user3']
        },
        {
            id: '16',
            description: 'sample description 16',
            createdAt: new Date('2018-02-23T23:16:10'),
            author: 'sampleUsername15',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2']
        },
        {
            id: '17',
            description: 'sample description 17',
            createdAt: new Date('2018-02-23T23:15:25'),
            author: 'sampleUsername15',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user4']
        },
        {
            id: '18',
            description: 'sample description 18',
            createdAt: new Date('2018-02-23T23:06:15'),
            author: 'sampleUsername14',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user5']
        },
        {
            id: '19',
            description: 'sample description 19',
            createdAt: new Date('2018-02-23T23:20:55'),
            author: 'sampleUsername12',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user1', 'user2', 'user3']
        },
        {
            id: '20',
            description: 'sample description 20',
            createdAt: new Date('2018-03-23T23:00:00'),
            author: 'sampleUsername2',
            photoLink: 'samplelink.com',
            hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
            likes: ['user4', 'user5']
        },
    ];


    let filterByDate = function (obj1, obj2) {
        return obj1.createdAt - obj2.createdAt;
    };

    function getPhotoPosts(skip = 0, top = 10, filterConfig) {
        if (skip === 0) {
            top--;//Для корректного вырезания куска массива
        }
        if (filterConfig === undefined) {
            photoPosts.sort(filterByDate);
            return photoPosts.slice(skip, skip + top + 1);
        }

        if ("author" in filterConfig) {
            let postsByAuthor = photoPosts.filter((post) => post.author === filterConfig.author);
            postsByAuthor.sort(filterByDate);
            return postsByAuthor.slice(skip, skip + top + 1);
        }

        if ("createdAt" in filterConfig) {
            let postsByDate = photoPosts.filter((post) => (post.createdAt.getTime() === filterConfig.createdAt.getTime()));
            postsByDate.sort(filterByDate);
            return postsByDate.slice(skip, skip + top + 1);
        }

        if ("hashTags" in filterConfig) {
            let postsWithHashTags = findPostsByHashTags(filterConfig.hashTags);
            return postsWithHashTags.slice(skip, skip + top + 1);
        }
    }

    function findPostsByHashTags(hashTags) {
        let postsWithHashTags = [];
        for (let photoPost of photoPosts) {
            for (let hashTag of hashTags) {
                if (photoPost.hashTags.includes(hashTag)) {
                    postsWithHashTags.push(photoPost);
                    break;
                }
            }
        }
        return postsWithHashTags;
    }

    function editPhotoPost(id, photoPost) {
        let oldPhotoPost = getPhotoPost(id);
        if (!validatePhotoPost(oldPhotoPost) || (photoPost === undefined)) {
            return false;
        }

        if ((typeof (photoPost.description) === "string") && (photoPost.description.length < 200)) {
            oldPhotoPost.description = photoPost.description;
        }
        if ((typeof (photoPost.photoLink) === "string") && (photoPost.photoLink) !== "") {
            oldPhotoPost.photoLink = photoPost.photoLink;
        }
        if ((photoPost.hashTags instanceof Array) && (photoPost.hashTags.length !== 0)) {
            for (let hashTag in photoPost.hashTags) {
                if (!oldPhotoPost.hashTags.includes(hashTag)) {
                    oldPhotoPost.hashTags.push(hashTag);
                }
            }
        }
        if ((photoPost.likes instanceof Array) && (photoPost.likes.length !== 0)) {
            for (let like in photoPost.likes) {
                if (!oldPhotoPost.likes.includes(like)) {
                    oldPhotoPost.likes.push(like);
                }
            }
        }
        return true;
    }

    function addPhotoPost(photoPost) {
        if (!validatePhotoPost(photoPost) ||
            (getPhotoPost(photoPost.id) !== undefined)) {//id должен быть уникальным
            return false;
        }
        photoPosts.push(photoPost);
        return true;
    }

    function validatePhotoPost(photoPost) {
        if ((photoPost !== undefined) &&
            (typeof (photoPost.id) === "string") && (photoPost.id !== "") &&
            (typeof (photoPost.description === "string")) && (photoPost.description.length < 200) &&
            (photoPost.createdAt instanceof Date) &&
            (typeof (photoPost.author) === "string") && (photoPost.author !== "") &&
            (typeof (photoPost.photoLink) === "string") && (photoPost.photoLink !== "")) {

            return true;
        }
        return false;
    }

    function getPhotoPost(id) {
        return photoPosts.find((post) => post.id === id);
    }

    function removePhotoPost(id) {
        let index = photoPosts.findIndex((post) => post.id === id);
        if (index === -1) {
            return false;
        }
        photoPosts.splice(index, 1);
        return true;
    }


    let incorrectPost = {
        id: '',
        description: 'More than 200 charactersMore than 200 charactersMore than 200 charactersMore than 200 characters' +
        'More than 200 charactersMore than 200 charactersMore than 200 charactersMore than 200 characters',
        createdAt: new Date('2018-02-23T23:01:00'),
        author: '',
        photoLink: 'samplelink.com',
        hashTags: ['#sampleTag1', '#sampleTag2', '#sampleTag3'],
        likes: ['user1', 'user2']
    };

    let correctPost = {
        id: '100',
        description: 'Definitely less than 200 characters',
        createdAt: new Date('2018-02-23T23:01:00'),
        author: 'Correct author name',
        photoLink: 'correctLink.com',
        hashTags: ['#sampleTag1', '#sampleTag3'],
        likes: ['user1']
    };

    console.log("Getting the post with id = 2:");
    console.log(getPhotoPost('2'));
    console.log();
    console.log("Getting the post with id that doesn't exist:");
    console.log(getPhotoPost('-100'));
    console.log();
    console.log("Validation of the correct post:");
    console.log(validatePhotoPost(getPhotoPost('3')) + '\n');
    console.log("Validation of the incorrect post:");
    console.log(validatePhotoPost(incorrectPost) + '\n');
    console.log("Removal of the post with id = 3:");
    console.log(removePhotoPost('3') + '\n');
    console.log("Check if this post exists:");
    console.log(getPhotoPost('3'));
    console.log();
    console.log("Removal of the post, that doesn't exist:");
    console.log(removePhotoPost('-100') + '\n');
    console.log("Adding a correct post:");
    console.log(addPhotoPost(correctPost) + '\n');
    console.log("Checking if this post is added into array:");
    console.log(getPhotoPost('100'));
    console.log();
    console.log("Adding an incorrect post:");
    console.log(addPhotoPost(incorrectPost));
    console.log("Getting ten first photo posts, ascendingly sorted by date:");
    console.log(getPhotoPosts(0, 10));
    console.log();
    console.log("Getting three photo posts by sampleUsername1 with one skipped:");
    console.log(getPhotoPosts(1, 3, {author : 'sampleUsername1'}));
    console.log("Getting photo posts by non-existing user:");
    console.log(getPhotoPosts(1, 3, {author : 'Jon Snow'}));
    console.log();
    console.log("Getting posts that contain #sampleTag2");
    console.log(getPhotoPosts(0, 10, {hashTags: ['#sampleTag2']}));
    console.log();
    console.log("Getting posts by certain data:");
    console.log(getPhotoPosts(0, 2, {createdAt: new Date('2018-02-23T23:01:00')}));
    console.log();
    console.log("Editing description in post with id = 2:");
    console.log(editPhotoPost('2', {description: 'Description has changed'}));
    console.log(getPhotoPost('2'));
    console.log("Editing description in post with non-existing id:");
    console.log(editPhotoPost('-100', {description: 'Description has changed'}));
    console.log("Editing  post with undefined object:");
    console.log(editPhotoPost('100'));
})();
