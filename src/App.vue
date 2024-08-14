
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
  </div>
</template>

<script lang="ts">
import { CalendarOutlined, ClockCircleOutlined, SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
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
