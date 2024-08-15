
<template>
  <div class="text-center main">
    <div>
      <img src="./assets/poster.png" class="poster" />
    </div>
    <a-divider />
    <div>
      <img src="./assets/bismillah.svg" class="bismillah" />
    </div>
    <div class="text-center text-group">
      <p>Dengan penuh kesyukuran, kami</p>
      <div class="name">
        <h2>Samaon Abd Hamid</h2>
        <h2>&</h2>
        <h2>Zalina Mohd Yop</h2>
      </div>
      <p>
        Menjemput Yang Berbahagia Tan Sri / Puan Sri / Dato' Seri / Datin Seri /
        Dato' / Datin / Tuan / Puan / Encik / Cik ke majlis perkahwinan anakanda kami
      </p>
      <div class="name name-card">
        <h2>Khairul Habib Bin Samaon</h2>
        <h2>&</h2>
        <h2>Nur Haziqah Binti Amzafi</h2>
      </div>
      <a-divider />
      <div>
        <p class="summary-icon"><CalendarOutlined /></p>
        <p>Sabtu, 2 November 2024</p>
      </div>
      <div>
        <p class="summary-icon"><ClockCircleOutlined /></p>
        <p>11.00 pagi - 3.00 petang</p>
      </div>
      <div>
        <p class="summary-icon"><SearchOutlined /></p>
        <p>
          MIM event Hall,<br />
          2174, Jalan Khamis,<br />
          Meru, 42200 Klang Selangor
        </p>
      </div>
    </div>
    <a-divider />
    <div class="countdown">
      <a-row gutter="16">
        <a-col span="5">
          <h3>{{ timeLeft?.days || 0 }}</h3>
          <p class="countdown-label">Hari</p>
        </a-col>
        <a-col span="1">:</a-col>
        <a-col span="5">
          <h3>{{ timeLeft?.hours || 0 }}</h3>
          <p class="countdown-label">Jam</p>
        </a-col>
        <a-col span="1">:</a-col>
        <a-col span="5">
          <h3>{{ timeLeft?.minutes || 0 }}</h3>
          <p class="countdown-label">Minit</p>
        </a-col>
        <a-col span="1">:</a-col>
        <a-col span="5">
          <h3>{{ timeLeft?.seconds || 0 }}</h3>
          <p class="countdown-label">Saat</p>
        </a-col>
      </a-row>
    </div>
    <div class="doa">
      <h3>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</h3>
      <p class="doa-text">
        “ Dari setinggi dan seluas kasih sayangMu, Kau limpahkan rahmat jua keampunanMu kepada
        pengantin suami isteri. Berkatilah majlis yang diadakan dengan keberkatan dari permulaan
        hingga pengakhirnya. Sesungguhnya pertemuan ini adalah dengan izinMu, kurniakanlah keduanya
        ketenangan, kebahagiaan dan jiwa yang tabah menghadapi setiap dugaanMu. Mudah-mudahan
        perkongsian hidup yang dibina berkekalan hingga ke akhir usia dan kurniakanlah kepada
        mereka zuriat yang soleh dan solehah. Dengan taufik dan hidayahMu beruntunglah keduanya
        dalam kehidupan di dunia lebih-lebih lagi di akhirat ”
      </p>
    </div>
    <a-divider />
    <div class="ucapan-terima-kasih">
      <p>
        Semoga kehadiran Tuan / Puan dapat menyerikan lagi majlis dan diberkati Allah SWT
      </p>
      <p class="terima-kasih">
        Terima Kasih
      </p>
    </div>
    <div>
      <a-card class="menu">
        <a-row :gutter="16">
          <a-col span="8">
            <a @click="() => {showCalendar = true}">
              <p style="color: #fff" class="menu-icon"><CalendarOutlined /></p>
              <p class="menu-text">Kalendar</p>
            </a>
          </a-col>
          <a-col span="8">
            <a @click="() => {showContact = true}">
              <p style="color: #fff" class="menu-icon"><UserOutlined /></p>
              <p class="menu-text">Hubungi</p>
            </a>
          </a-col>
          <a-col span="8">
            <a @click="() => {showLocation = true}">
              <p style="color: #fff" class="menu-icon"><SearchOutlined /></p>
              <p class="menu-text">Lokasi</p>
            </a>
          </a-col>
        </a-row>
      </a-card>
    </div>
    <a-drawer title="Kalendar" :visible="showCalendar" @close="() => {showCalendar = false}" placement="bottom" :height="200">
      <div class="text-center">
        <a href="https://calendar.google.com/calendar/r/eventedit?text=Saya+Nak+Kahwin&dates=20241102T030000Z/20241102T070000Z&ctz=Asia/Kuala_Lumpur&details=Undangan+Majlis+Perkahwinan+Khairul+Habib+%26+Nur+Haziqah&location=Dewan+Serbaguna+Kampung+Melayu+Subang&trp=false" target="_blank">
          <p class="calendar-button"><GoogleOutlined /> Tambah ke Google Kalendar</p>
        </a>
        <a
          href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR
            VERSION:2.0
            PRODID:-//Khairul Habib//Saya Nak Kahwin//EN
            BEGIN:VEVENT
            UID:KhairulHabibNurHaziqah@SayaNakKahwin
            DTSTAMP:20240724T030000Z
            DTSTART:20241102T030000Z
            DTEND:20241102T070000Z
            SUMMARY:Saya Nak Kahwin
            LOCATION:Dewan Serbaguna Kampung Melayu Subang
            DESCRIPTION:Undangan Majlis Perkahwinan Khairul Habib & Nur Haziqah
            END:VEVENT
            END:VCALENDAR"
          target="_blank"
        >
          <p class="calendar-button"><AppleOutlined /> Tambah ke Apple Kalendar</p>
        </a>
      </div>
    </a-drawer>
    <a-drawer title="Hubungi" :visible="showContact" @close="() => {showContact = false}" placement="bottom" :height="350">
      <div class="contact-box">
        <a-row :gutter="16">
          <a-col span="16">
            <p>Samaon</p>
            <p class="contact-relation">Ayah pengantin lelaki</p>
          </a-col>
          <a-col span="4">
            <a href="tel:+60126364919" target="_blank"><PhoneOutlined class="contact-icon" /></a>
          </a-col>
          <a-col span="4">
            <a href="https://wa.me/60126364919" target="_blank"><WhatsAppOutlined class="contact-icon" /></a>
          </a-col>
        </a-row>
      </div>
      <div class="contact-box">
        <a-row :gutter="16">
          <a-col span="16">
            <p>Zalina</p>
            <p class="contact-relation">Ibu pengantin lelaki</p>
          </a-col>
          <a-col span="4">
            <a href="tel:+60182313424" target="_blank"><PhoneOutlined class="contact-icon" /></a>
          </a-col>
          <a-col span="4">
            <a href="https://wa.me/60182313424" target="_blank"><WhatsAppOutlined class="contact-icon" /></a>
          </a-col>
        </a-row>
      </div>
      <div class="contact-box">
        <a-row :gutter="16">
          <a-col span="16">
            <p>Ayun</p>
            <p class="contact-relation">Adik pengantin lelaki</p>
          </a-col>
          <a-col span="4">
            <a href="tel:+60182321224" target="_blank"><PhoneOutlined class="contact-icon" /></a>
          </a-col>
          <a-col span="4">
            <a href="https://wa.me/60182321224" target="_blank"><WhatsAppOutlined class="contact-icon" /></a>
          </a-col>
        </a-row>
      </div>
      <div class="contact-box">
        <a-row :gutter="16">
          <a-col span="16">
            <p>Amin</p>
            <p class="contact-relation">Adik pengantin lelaki</p>
          </a-col>
          <a-col span="4">
            <a href="tel:+601127091241" target="_blank"><PhoneOutlined class="contact-icon" /></a>
          </a-col>
          <a-col span="4">
            <a href="https://wa.me/601127091241" target="_blank"><WhatsAppOutlined class="contact-icon" /></a>
          </a-col>
        </a-row>
      </div>
    </a-drawer>
    <a-drawer title="Lokasi" :visible="showLocation" @close="() => {showLocation = false}" placement="bottom" :height="200">
      <a href="https://ul.waze.com/ul?place=ChIJx9nFsE5RzDERPlz_T49aAJ4&ll=3.13072230%2C101.42958960&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank">
        <div class="map">
          Waze
        </div>
      </a>
      <a href="https://maps.app.goo.gl/DJj5XoFVLxWkkzUEA" target="_blank">
        <div class="map">
          Google Map
        </div>
      </a>
    </a-drawer>
  </div>
</template>

<script lang="ts">
import { AppleOutlined, CalendarOutlined, ClockCircleOutlined, GoogleOutlined, PhoneOutlined, SearchOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons-vue';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  components: {
    CalendarOutlined,
    ClockCircleOutlined,
    SearchOutlined,
    UserOutlined,
    GoogleOutlined,
    AppleOutlined,
    WhatsAppOutlined,
    PhoneOutlined,
  },
  data() {
    return {
      showCalendar: ref<boolean>(false),
      showContact: ref<boolean>(false),
      showLocation: ref<boolean>(false),
    };
  },
  setup() {
    const targetDate = new Date('2024-11-02T11:00:00');
    const timeLeft = ref<{
      days: number;
      hours: number;
      minutes: number;
      seconds: number;
    } | null>(null);

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        timeLeft.value = { days, hours, minutes, seconds };
      } else {
        timeLeft.value = null;
      }
    };

    onMounted(() => {
      updateCountdown();
      setInterval(updateCountdown, 1000);
    });

    return {
      timeLeft,
    };
  },
});
</script>

<style scoped>
.menu {
  background-image: linear-gradient(to bottom, #7c7b7b, #000000);
  color: #fff;
  width: 90%;
  margin: 15px 5% 0px;
}

.contact-icon {
  font-size: 20px;
  margin: 8px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
}

.contact-box {
  border: 1px solid #7c7b7b;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 5px 0px;
  background-color: rgb(253, 239, 252);
}

.map {
  border: 1px solid #7c7b7b;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 5px 0px;
  background-color: rgb(253, 239, 252);
  text-align: center;
}

.contact-relation {
  font-size: 10px !important;
  color: rgb(149, 147, 147);
}

.calendar-button {
  border: 1px solid #949191;
  border-radius: 5px;
  padding: 5px 10px;
  margin: 10px 0px;
  cursor: pointer;
}

.menu-text {
  font-size: 10px !important;
  color: rgb(214, 212, 212);
}

.menu-icon {
  font-size: 20px;
  cursor: pointer;
}

.countdown {
  background-color: #fff;
  width: 80%;
  margin: 10%;
  padding: 10px 2px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ucapan-terima-kasih {
  padding: 10px 20px;
}

.terima-kasih {
  padding-top: 20px;
}

.doa {
  border: 1px solid rgb(250, 141, 141);
  width: 90%;
  margin: 5%;
  padding: 10px 10px;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffffea;
}

.doa-text {
  margin-top: 10px;
}

.countdown-label {
  font-size: 10px;
  color: grey;
}

.main {
  padding-bottom: 50px;
}
.poster {
  width: 98%;
  height: auto;
  border-radius: 6px;
  margin: 1%;
  border: 1px solid rgb(250, 141, 141);
}

.summary-icon {
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 5px;
}

.bismillah {
  width: 70%;
  height: auto;
  margin: 20px 15%;
}

.name {
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: 'Times New Roman', Times, serif;
}

.name-card {
  border: 1px solid rgb(250, 141, 141);
  border-radius: 6px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
  align-items: center;
}

.text-group {
  line-height: 22px;
  padding: 0px 20px;
}
</style>
