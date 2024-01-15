<script setup lang="ts">
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";

const data = [
  {
    id: 1,
    title: "Event I",
    description: "dfkdajkhfjkfnsa",
    date: "10-01-2024",
    location: "New York",
    medias: [
      { url: "https://picsum.photos/200" },
      { url: "https://picsum.photos/200" },
    ],
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for Event 2",
    date: "10-01-2024",
    location: "New York",
    medias: [
      { url: "https://picsum.photos/200" },
      { url: "https://picsum.photos/200" },
    ],
  },
  {
    id: 3,
    title: "Event 3",
    description: "Description for Event 3",
    date: "10-01-2024",
    location: "New York",
    medias: [
      { url: "https://picsum.photos/200" },
      { url: "https://picsum.photos/200" },
    ],
  },
  {
    id: 4,
    title: "Movie Night: The Princess Bride",
    description: "Join us for a screening of the classic comedy adventure!",
    date: "15-01-2024",
    location: "Central Park Amphitheater",
    medias: [
      { url: "https://picsum.photos/200?theme=movie" },
      { url: "https://picsum.photos/200?theme=adventure" },
    ],
  },
  {
    id: 5,
    title: "Cooking Class: Vegan Sushi",
    description: "Learn the art of making delicious and healthy vegan sushi!",
    date: "20-01-2024",
    location: "Greenmarket Culinary Studio",
    medias: [
      { url: "https://picsum.photos/200?theme=food" },
      { url: "https://picsum.photos/200?theme=vegan" },
    ],
  },
  {
    id: 6,
    title: "Stand-Up Comedy Night",
    description:
      "Laugh the night away with some of the city's hottest comedians!",
    date: "25-01-2024",
    location: "The Laugh Lounge",
    medias: [
      { url: "https://picsum.photos/200?theme=comedy" },
      { url: "https://picsum.photos/200?theme=microphone" },
    ],
  },
  {
    id: 7,
    title: "Book Club: The Martian",
    description: "Discuss Andy Weir's gripping story of survival on Mars!",
    date: "30-01-2024",
    location: "Starbuck's on Main Street",
    medias: [
      { url: "https://picsum.photos/200?theme=book" },
      { url: "https://picsum.photos/200?theme=mars" },
    ],
  },
  {
    id: 8,
    title: "Yoga in the Park",
    description:
      "Find your inner peace with a relaxing yoga session in the heart of nature!",
    date: "04-02-2024",
    location: "Bryant Park",
    medias: [
      { url: "https://picsum.photos/200?theme=yoga" },
      { url: "https://picsum.photos/200?theme=park" },
    ],
  },
  {
    id: 9,
    title: "DIY Terrarium Workshop",
    description: "Create your own miniature world with plants and moss!",
    date: "10-02-2024",
    location: "The Craft Collective",
    medias: [
      { url: "https://picsum.photos/200?theme=plants" },
      { url: "https://picsum.photos/200?theme=crafts" },
    ],
  },
  {
    id: 10,
    title: "Live Music: Indie Night",
    description:
      "Discover local up-and-coming talent at this vibrant music showcase!",
    date: "15-02-2024",
    location: "The Underground Bar",
    medias: [
      { url: "https://picsum.photos/200?theme=music" },
      { url: "https://picsum.photos/200?theme=guitar" },
    ],
  },
];

const openCreate = useState("openCreate", () => false);
const openEdit = useState("openEdit", () => false);
const editData = reactive({
  title: "",
  description: "",
  date: "",
  location: "",
  medias: null,
});

const showEditModal = (data: typeof editData) => {
  editData.title = data.title;
  editData.description = data.description;
  editData.date = data.date;
  editData.location = data.location;
  editData.medias = data.medias;
  openEdit.value = true;
};
</script>
<template>
  <div>
    <div class="flex justify-between items-center mb-5">
      <p>Events</p>

      <button
        class="w-10 h-10 pb-1 border rounded-full shadow-md"
        @click="openCreate = !openCreate"
      >
        <PlusOutlined />
      </button>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <a-card
        v-for="event of data"
        :key="event._id"
        hoverable
        style=""
        class="w-[200px] lg:w-[250px] h-fit max-h-[400px]"
      >
        <template #cover>
          <!-- <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        /> -->

          <a-carousel autoplay>
            <div v-for="md of event.medias" class="bg-red-300" :key="md.name">
              <a-image :src="md.url" class="object-contain" />
            </div>
          </a-carousel>
        </template>
        <template #actions>
          <setting-outlined key="setting" />
          <edit-outlined key="edit" @click="() => showEditModal(event)" />
          <a-popconfirm
            title="Are you sure delete this task?"
            ok-text="Yes"
            cancel-text="No"
          >
            <DeleteOutlined />
          </a-popconfirm>
          <!-- <delete-outlined key="delete" /> -->
        </template>
        <a-card-meta :title="event.title" :description="event.description" />
      </a-card>
    </div>

    <a-modal :footer="false" v-model:open="openCreate" title="Create Event">
      <create-event />
    </a-modal>
    <a-modal :footer="false" v-model:open="openEdit" title="Edit Event">
      <edit-event :editData="editData" />
      <!-- @editDataChanged="handleEditDataChanged" -->
    </a-modal>
  </div>
</template>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;

  overflow: hidden;
}
:deep(.slick-slide h3) {
  color: #fff;
}
</style>
