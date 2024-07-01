const photos = [
    {
      id: "94a7e01b-8576-4d18-8b84-6ae588db02d9",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1719517887323-560a2e319fe6?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "ocean"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=53",
        name: "Alex B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "de05d078-6f6d-4272-a08f-5a805a23aba4",
      title: "Mountain Landscape",
      url: "https://images.unsplash.com/photo-1719576503732-83b32a9c2ba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "mountain", "landscape"],
      views: "8M",
      share: "3.12M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=54",
        name: "Brian Xelo",
        bio: "I am a landscape photographer in Colorado, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 150
      },
      likes: 120
    },
    {
      id: "8265198d-e2e1-4221-addc-8244f39fdd62",
      title: "The Beautiful Nature",
      url: "https://images.unsplash.com/photo-1719558764735-3cb07a10c793?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "river", "forest"],
      views: "9M",
      share: "4.20M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=55",
        name: "Ceza Des",
        bio: "I am a wildlife photographer in Brazil, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 180
      },
      likes: 110
    },
    {
      id: "6cf6c10d-8ba8-46d7-b246-0e1fd5e270df",
      title: "Sunset Over Mountains",
      url: "https://images.unsplash.com/photo-1719429815416-15ecc8bbb77a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "sunset", "mountain"],
      views: "12M",
      share: "5.6M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=56",
        name: "Karim Bulletin",
        bio: "I am a landscape photographer in the Alps, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 200
      },
      likes: 130
    },
    {
      id: "a7f14fb2-9b2d-43bb-98af-6c70158e9c55",
      title: "The White Warmth",
      url: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "flower", "green"],
      views: "6M",
      share: "2.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=57",
        name: "Madan PA",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 120
      },
      likes: 80
    },
    {
      id: "6bea51c4-1123-425f-90c9-9148724872e5",
      title: "Forest Path",
      url: "https://images.unsplash.com/photo-1449982066009-849a177daf48?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "forest", "path"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=58",
        name: "Moina Lam",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "02983ddd-338d-4382-b0c8-316caa21b4a5",
      title: "Beach Sunset",
      url: "https://images.unsplash.com/photo-1719304576167-fbc0048ab0f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "beach", "sunset"],
      views: "15M",
      share: "7.2M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=59",
        name: "Nat B",
        bio: "I am a travel photographer, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 300
      },
      likes: 150
    },
    {
      id: "552f7d8d-d9eb-4edc-98a9-cec20c90d90c",
      title: "Mountain Peak",
      url: "https://images.unsplash.com/photo-1673551490752-ae8cd82831f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "mountain", "peak"],
      views: "11M",
      share: "5.6M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=60",
        name: "Taral X",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "f4fab2f9-e0cf-4f15-8779-d09d9e6d59bd",
      title: "Calm Lake",
      url: "https://images.unsplash.com/photo-1718976707927-4a9c933d9557?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "lake", "calm"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=61",
        name: "Zhoom B",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "9761a3ea-2c2c-4b6e-a618-a6e4d26cf729",
      title: "Forest Trail",
      url: "https://images.unsplash.com/photo-1713196037424-c53691fa0343?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "forest", "trail"],
      views: "14M",
      share: "6.3M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=62",
        name: "T Manhattan",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "154ca3f8-07ec-464f-9eac-6775ec37bba1",
      title: "Mountain Lake",
      url: "https://images.unsplash.com/photo-1692070428642-eaeab4a34213?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "lake", "mountain"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=63",
        name: "Abhinash Chahal",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    },
    {
      id: "154ca3f8-07ec-464f-9eac-6775ec37bba1",
      title: "Mountain Lake",
      url: "https://images.unsplash.com/photo-1718976707958-c906af15a5a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["nature", "lake", "mountain"],
      views: "10M",
      share: "4.56M",
      uploaded: "2024-01-31",
      author: {
        avatar: "https://i.pravatar.cc/150?img=63",
        name: "Abhinash Chahal",
        bio: "I am a portrait photographer in Michigan, and happily share my hard work so others can find and use my photos for FREE!",
        followers: 220
      },
      likes: 100
    }
]
  

  const getAllPhotos = () => {
    return photos;
  }

  const getPhotoById = (id) => {
    return photos.find(photo => photo.id === id);
  }

  export {
    getAllPhotos,
    getPhotoById
  }