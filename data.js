const data = [
    {
        jenisKelamin: 'lakilaki',
        usia: [
            { bulan: 0, bb_u: 3.3, pb_u: 49.9, lika_u: 34.5, lila_u: 46 },
            { bulan: 1, bb_u: 4.5, pb_u: 54.7, lika_u: 37.3, lila_u: 46 },
            { bulan: 2, bb_u: 5.6, pb_u: 58.4, lika_u: 39.1, lila_u: 46 },
            { bulan: 3, bb_u: 6.4, pb_u: 61.4, lika_u: 40.5, lila_u: 46 },
            { bulan: 4, bb_u: 7.0, pb_u: 63.9, lika_u: 41.6, lila_u: 46 },
            { bulan: 5, bb_u: 7.5, pb_u: 65.9, lika_u: 42.6, lila_u: 46 },
            { bulan: 6, bb_u: 7.9, pb_u: 67.6, lika_u: 43.3, lila_u: 46 },
            { bulan: 7, bb_u: 8.3, pb_u: 69.2, lika_u: 44, lila_u: 46 },
            { bulan: 8, bb_u: 8.6, pb_u: 70.6, lika_u: 44.5, lila_u: 46 },
            { bulan: 9, bb_u: 8.9, pb_u: 72.0, lika_u: 45, lila_u: 46 },
            { bulan: 10, bb_u: 9.2, pb_u: 73.3, lika_u: 45.4, lila_u: 46 },
            { bulan: 11, bb_u: 9.4, pb_u: 74.5, lika_u: 45.8, lila_u: 46 },
            { bulan: 12, bb_u: 9.6, pb_u: 75.7, lika_u: 46.1, lila_u: 46 },
            { bulan: 13, bb_u: 9.9, pb_u: 76.9, lika_u: 46.3, lila_u: 46 },
            { bulan: 14, bb_u: 10.1, pb_u: 78.0, lika_u: 46.6, lila_u: 46 },
            { bulan: 15, bb_u: 10.3, pb_u: 79.1, lika_u: 46.8, lila_u: 46 },
            { bulan: 16, bb_u: 10.5, pb_u: 80.2, lika_u: 47, lila_u: 46 },
            { bulan: 17, bb_u: 10.7, pb_u: 81.2, lika_u: 47.2, lila_u: 46 },
            { bulan: 18, bb_u: 10.9, pb_u: 82.3, lika_u: 47.4, lila_u: 46 },
            { bulan: 19, bb_u: 11.1, pb_u: 83.2, lika_u: 47.5, lila_u: 46 },
            { bulan: 20, bb_u: 11.3, pb_u: 84.2, lika_u: 47.7, lila_u: 46 },
            { bulan: 21, bb_u: 11.5, pb_u: 85.1, lika_u: 47.8, lila_u: 46 },
            { bulan: 22, bb_u: 11.8, pb_u: 86.0, lika_u: 48, lila_u: 46 },
            { bulan: 23, bb_u: 12.0, pb_u: 86.9, lika_u: 48.1, lila_u: 46 },
            { bulan: 24, bb_u: 12.2, pb_u: 87.8, lika_u: 48.3, lila_u: 46 },
            { bulan: 25, bb_u: 12.4, pb_u: 88.0, lika_u: 48.4, lila_u: 46 },
            { bulan: 26, bb_u: 12.5, pb_u: 88.8, lika_u: 48.5, lila_u: 46 },
            { bulan: 27, bb_u: 12.7, pb_u: 89.6, lika_u: 48.6, lila_u: 46 },
            { bulan: 28, bb_u: 12.9, pb_u: 90.4, lika_u: 48.7, lila_u: 46 },
            { bulan: 29, bb_u: 13.1, pb_u: 91.2, lika_u: 48.8, lila_u: 46 },
            { bulan: 30, bb_u: 13.3, pb_u: 91.9, lika_u: 48.9, lila_u: 46 },
            { bulan: 31, bb_u: 13.5, pb_u: 92.7, lika_u: 49, lila_u: 46 },
            { bulan: 32, bb_u: 13.7, pb_u: 93.4, lika_u: 49.1, lila_u: 46 },
            { bulan: 33, bb_u: 13.8, pb_u: 94.1, lika_u: 49.2, lila_u: 46 },
            { bulan: 34, bb_u: 14.0, pb_u: 94.8, lika_u: 49.3, lila_u: 46 },
            { bulan: 35, bb_u: 14.2, pb_u: 95.4, lika_u: 49.4, lila_u: 46 },
            { bulan: 36, bb_u: 14.3, pb_u: 96.1, lika_u: 49.5, lila_u: 46 },
            { bulan: 37, bb_u: 14.5, pb_u: 96.7, lika_u: 49.5, lila_u: 46 },
            { bulan: 38, bb_u: 14.7, pb_u: 97.4, lika_u: 49.6, lila_u: 46 },
            { bulan: 39, bb_u: 14.8, pb_u: 98.0, lika_u: 49.7, lila_u: 46 },
            { bulan: 40, bb_u: 15.0, pb_u: 98.6, lika_u: 49.7, lila_u: 46 },
            { bulan: 41, bb_u: 15.2, pb_u: 99.2, lika_u: 49.8, lila_u: 46 },
            { bulan: 42, bb_u: 15.3, pb_u: 99.9, lika_u: 49.9, lila_u: 46 },
            { bulan: 43, bb_u: 15.5, pb_u: 100.4, lika_u: 49.9, lila_u: 46 },
            { bulan: 44, bb_u: 15.7, pb_u: 101.0, lika_u: 50, lila_u: 46 },
            { bulan: 45, bb_u: 15.8, pb_u: 101.6, lika_u: 50.1, lila_u: 46 },
            { bulan: 46, bb_u: 16.0, pb_u: 102.2, lika_u: 50.1, lila_u: 46 },
            { bulan: 47, bb_u: 16.2, pb_u: 102.8, lika_u: 50.2, lila_u: 46 },
            { bulan: 48, bb_u: 16.3, pb_u: 103.3, lika_u: 50.2, lila_u: 46 },
            { bulan: 49, bb_u: 16.5, pb_u: 103.9, lika_u: 50.3, lila_u: 46 },
            { bulan: 50, bb_u: 16.7, pb_u: 104.4, lika_u: 50.3, lila_u: 46 },
            { bulan: 51, bb_u: 16.8, pb_u: 105.0, lika_u: 50.4, lila_u: 46 },
            { bulan: 52, bb_u: 17.0, pb_u: 105.6, lika_u: 50.4, lila_u: 46 },
            { bulan: 53, bb_u: 17.2, pb_u: 106.1, lika_u: 50.4, lila_u: 46 },
            { bulan: 54, bb_u: 17.3, pb_u: 106.7, lika_u: 50.5, lila_u: 46 },
            { bulan: 55, bb_u: 17.5, pb_u: 107.2, lika_u: 50.5, lila_u: 46 },
            { bulan: 56, bb_u: 17.7, pb_u: 107.8, lika_u: 50.6, lila_u: 46 },
            { bulan: 57, bb_u: 17.8, pb_u: 108.3, lika_u: 50.6, lila_u: 46 },
            { bulan: 58, bb_u: 18.0, pb_u: 108.9, lika_u: 50.7, lila_u: 46 },
            { bulan: 59, bb_u: 18.2, pb_u: 109.4, lika_u: 50.7, lila_u: 46 },
            { bulan: 60, bb_u: 18.3, pb_u: 110.0, lika_u: 0.7, lila_u: 46 },
            // Tambahkan data sampai 60 bulan
        ],
        z0: [
            { bulan: 0, bb_u: 2.9, pb_u: 48, lika_u: 33.2, lila_u: 46 },
            { bulan: 1, bb_u: 3.9, pb_u: 52.8, lika_u: 36.1, lila_u: 46 },
            { bulan: 2, bb_u: 4.9, pb_u: 56.4, lika_u: 38, lila_u: 46 },
            { bulan: 3, bb_u: 5.7, pb_u: 59.4, lika_u: 39.3, lila_u: 46 },
            { bulan: 4, bb_u: 6.2, pb_u: 61.8, lika_u: 40.4, lila_u: 46 },
            { bulan: 5, bb_u: 6.7, pb_u: 63.8, lika_u: 41.4, lila_u: 46 },
            { bulan: 6, bb_u: 7.1, pb_u: 65.5, lika_u: 42.1, lila_u: 46 },
            { bulan: 7, bb_u: 7.4, pb_u: 67, lika_u: 42.7, lila_u: 46 },
            { bulan: 8, bb_u: 7.7, pb_u: 68.4, lika_u: 43.3, lila_u: 46 },
            { bulan: 9, bb_u: 8.0, pb_u: 69.7, lika_u: 43.7, lila_u: 46 },
            { bulan: 10, bb_u: 8.2, pb_u: 71, lika_u: 44.1, lila_u: 46 },
            { bulan: 11, bb_u: 8.4, pb_u: 72.2, lika_u: 44.5, lila_u: 46 },
            { bulan: 12, bb_u: 8.6, pb_u: 73.4, lika_u: 44.8, lila_u: 46 },
            { bulan: 13, bb_u: 8.8, pb_u: 74.5, lika_u: 45, lila_u: 46 },
            { bulan: 14, bb_u: 9.0, pb_u: 75.6, lika_u: 45.3, lila_u: 46 },
            { bulan: 15, bb_u: 9.2, pb_u: 76.6, lika_u: 45.5, lila_u: 46 },
            { bulan: 16, bb_u: 9.4, pb_u: 77.6, lika_u: 45.7, lila_u: 46 },
            { bulan: 17, bb_u: 9.6, pb_u: 78.6, lika_u: 45.9, lila_u: 46 },
            { bulan: 18, bb_u: 9.8, pb_u: 79.6, lika_u: 46, lila_u: 46 },
            { bulan: 19, bb_u: 10.0, pb_u: 80.5, lika_u: 46.2, lila_u: 46 },
            { bulan: 20, bb_u: 10.1, pb_u: 81.4, lika_u: 46.4, lila_u: 46 },
            { bulan: 21, bb_u: 10.3, pb_u: 82.3, lika_u: 46.5, lila_u: 46 },
            { bulan: 22, bb_u: 10.5, pb_u: 83.1, lika_u: 46.6, lila_u: 46 },
            { bulan: 23, bb_u: 10.7, pb_u: 83.9, lika_u: 46.8, lila_u: 46 },
            { bulan: 24, bb_u: 10.8, pb_u: 84.8, lika_u: 46.9, lila_u: 46 },
            { bulan: 25, bb_u: 11.0, pb_u: 84.9, lika_u: 47, lila_u: 46 },
            { bulan: 26, bb_u: 11.2, pb_u: 85.6, lika_u: 47.1, lila_u: 46 },
            { bulan: 27, bb_u: 11.3, pb_u: 86.4, lika_u: 47.2, lila_u: 46 },
            { bulan: 28, bb_u: 11.5, pb_u: 87.1, lika_u: 47.3, lila_u: 46 },
            { bulan: 29, bb_u: 11.7, pb_u: 87.8, lika_u: 47.4, lila_u: 46 },
            { bulan: 30, bb_u: 11.8, pb_u: 88.5, lika_u: 47.5, lila_u: 46 },
            { bulan: 31, bb_u: 12.0, pb_u: 89.2, lika_u: 47.6, lila_u: 46 },
            { bulan: 32, bb_u: 12.1, pb_u: 89.9, lika_u: 47.7, lila_u: 46 },
            { bulan: 33, bb_u: 12.3, pb_u: 90.5, lika_u: 47.8, lila_u: 46 },
            { bulan: 34, bb_u: 12.4, pb_u: 91.1, lika_u: 47.9, lila_u: 46 },
            { bulan: 35, bb_u: 12.6, pb_u: 91.8, lika_u: 48, lila_u: 46 },
            { bulan: 36, bb_u: 12.7, pb_u: 92.4, lika_u: 48, lila_u: 46 },
            { bulan: 37, bb_u: 12.9, pb_u: 93, lika_u: 48.1, lila_u: 46 },
            { bulan: 38, bb_u: 13.0, pb_u: 93.6, lika_u: 48.2, lila_u: 46 },
            { bulan: 39, bb_u: 13.1, pb_u: 94.2, lika_u: 48.2, lila_u: 46 },
            { bulan: 40, bb_u: 13.3, pb_u: 94.7, lika_u: 48.3, lila_u: 46 },
            { bulan: 41, bb_u: 13.4, pb_u: 95.3, lika_u: 48.4, lila_u: 46 },
            { bulan: 42, bb_u: 13.6, pb_u: 95.9, lika_u: 48.4, lila_u: 46 },
            { bulan: 43, bb_u: 13.7, pb_u: 96.4, lika_u: 48.5, lila_u: 46 },
            { bulan: 44, bb_u: 13.8, pb_u: 97, lika_u: 48.5, lila_u: 46 },
            { bulan: 45, bb_u: 14.0, pb_u: 97.5, lika_u: 48.6, lila_u: 46 },
            { bulan: 46, bb_u: 14.1, pb_u: 98.1, lika_u: 48.7, lila_u: 46 },
            { bulan: 47, bb_u: 14.3, pb_u: 98.6, lika_u: 48.7, lila_u: 46 },
            { bulan: 48, bb_u: 14.4, pb_u: 99.1, lika_u: 48.7, lila_u: 46 },
            { bulan: 49, bb_u: 14.5, pb_u: 99.7, lika_u: 48.8, lila_u: 46 },
            { bulan: 50, bb_u: 14.7, pb_u: 100.2, lika_u: 48.8, lila_u: 46 },
            { bulan: 51, bb_u: 14.8, pb_u: 100.7, lika_u: 48.9, lila_u: 46 },
            { bulan: 52, bb_u: 15.0, pb_u: 101.2, lika_u: 48.9, lila_u: 46 },
            { bulan: 53, bb_u: 15.1, pb_u: 101.7, lika_u: 49, lila_u: 46 },
            { bulan: 54, bb_u: 15.2, pb_u: 102.3, lika_u: 49, lila_u: 46 },
            { bulan: 55, bb_u: 15.4, pb_u: 102.8, lika_u: 49.1, lila_u: 46 },
            { bulan: 56, bb_u: 15.5, pb_u: 103.3, lika_u: 49.1, lila_u: 46 },
            { bulan: 57, bb_u: 15.6, pb_u: 103.8, lika_u: 49.1, lila_u: 46 },
            { bulan: 58, bb_u: 15.8, pb_u: 104.3, lika_u: 49.2, lila_u: 46 },
            { bulan: 59, bb_u: 15.9, pb_u: 104.8, lika_u: 49.2, lila_u: 46 },
            { bulan: 60, bb_u: 16.0, pb_u: 105.3, lika_u: 49.2, lila_u: 46 },
            // Tambahkan data sampai 60 bulan
        ],
        z1: [
            { bulan: 0, bb_u: 3.9, pb_u: 51.8, lika_u: 35.7, lila_u: 46 },
            { bulan: 1, bb_u: 5.1, pb_u: 56.7, lika_u: 38.4, lila_u: 46 },
            { bulan: 2, bb_u: 6.3, pb_u: 60.4, lika_u: 40.3, lila_u: 46 },
            { bulan: 3, bb_u: 7.2, pb_u: 63.5, lika_u: 41.7, lila_u: 46 },
            { bulan: 4, bb_u: 7.8, pb_u: 66, lika_u: 42.8, lila_u: 46 },
            { bulan: 5, bb_u: 8.4, pb_u: 68, lika_u: 43.8, lila_u: 46 },
            { bulan: 6, bb_u: 8.8, pb_u: 69.8, lika_u: 44.6, lila_u: 46 },
            { bulan: 7, bb_u: 9.2, pb_u: 71.3, lika_u: 45.2, lila_u: 46 },
            { bulan: 8, bb_u: 9.6, pb_u: 72.8, lika_u: 45.8, lila_u: 46 },
            { bulan: 9, bb_u: 9.9, pb_u: 74.2, lika_u: 46.3, lila_u: 46 },
            { bulan: 10, bb_u: 10.2, pb_u: 75.6, lika_u: 46.7, lila_u: 46 },
            { bulan: 11, bb_u: 10.5, pb_u: 76.9, lika_u: 47, lila_u: 46 },
            { bulan: 12, bb_u: 10.8, pb_u: 78.1, lika_u: 47.4, lila_u: 46 },
            { bulan: 13, bb_u: 11.0, pb_u: 79.3, lika_u: 47.6, lila_u: 46 },
            { bulan: 14, bb_u: 11.3, pb_u: 80.5, lika_u: 47.9, lila_u: 46 },
            { bulan: 15, bb_u: 11.5, pb_u: 81.7, lika_u: 48.1, lila_u: 46 },
            { bulan: 16, bb_u: 11.7, pb_u: 82.8, lika_u: 48.3, lila_u: 46 },
            { bulan: 17, bb_u: 12.0, pb_u: 83.9, lika_u: 48.5, lila_u: 46 },
            { bulan: 18, bb_u: 12.2, pb_u: 85, lika_u: 48.7, lila_u: 46 },
            { bulan: 19, bb_u: 12.5, pb_u: 86, lika_u: 48.9, lila_u: 46 },
            { bulan: 20, bb_u: 12.7, pb_u: 87, lika_u: 49, lila_u: 46 },
            { bulan: 21, bb_u: 12.9, pb_u: 88, lika_u: 49.2, lila_u: 46 },
            { bulan: 22, bb_u: 13.2, pb_u: 89, lika_u: 49.3, lila_u: 46 },
            { bulan: 23, bb_u: 13.4, pb_u: 89.9, lika_u: 49.5, lila_u: 46 },
            { bulan: 24, bb_u: 13.6, pb_u: 90.9, lika_u: 49.6, lila_u: 46 },
            { bulan: 25, bb_u: 13.9, pb_u: 91.1, lika_u: 49.7, lila_u: 46 },
            { bulan: 26, bb_u: 14.1, pb_u: 92, lika_u: 49.9, lila_u: 46 },
            { bulan: 27, bb_u: 14.3, pb_u: 92.9, lika_u: 50, lila_u: 46 },
            { bulan: 28, bb_u: 14.5, pb_u: 93.7, lika_u: 50.1, lila_u: 46 },
            { bulan: 29, bb_u: 14.8, pb_u: 94.5, lika_u: 50.2, lila_u: 46 },
            { bulan: 30, bb_u: 15.0, pb_u: 95.3, lika_u: 50.3, lila_u: 46 },
            { bulan: 31, bb_u: 15.2, pb_u: 96.1, lika_u: 50.4, lila_u: 46 },
            { bulan: 32, bb_u: 15.4, pb_u: 96.9, lika_u: 50.5, lila_u: 46 },
            { bulan: 33, bb_u: 15.6, pb_u: 97.6, lika_u: 50.6, lila_u: 46 },
            { bulan: 34, bb_u: 15.8, pb_u: 98.4, lika_u: 50.7, lila_u: 46 },
            { bulan: 35, bb_u: 16.0, pb_u: 99.1, lika_u: 50.8, lila_u: 46 },
            { bulan: 36, bb_u: 16.2, pb_u: 99.8, lika_u: 50.9, lila_u: 46 },
            { bulan: 37, bb_u: 16.4, pb_u: 100.5, lika_u: 51, lila_u: 46 },
            { bulan: 38, bb_u: 16.6, pb_u: 101.2, lika_u: 51, lila_u: 46 },
            { bulan: 39, bb_u: 16.8, pb_u: 101.8, lika_u: 51.1, lila_u: 46 },
            { bulan: 40, bb_u: 17.0, pb_u: 102.5, lika_u: 51.2, lila_u: 46 },
            { bulan: 41, bb_u: 17.2, pb_u: 103.2, lika_u: 51.3, lila_u: 46 },
            { bulan: 42, bb_u: 17.4, pb_u: 103.8, lika_u: 51.3, lila_u: 46 },
            { bulan: 43, bb_u: 17.6, pb_u: 104.5, lika_u: 51.4, lila_u: 46 },
            { bulan: 44, bb_u: 17.8, pb_u: 105.1, lika_u: 51.4, lila_u: 46 },
            { bulan: 45, bb_u: 18.0, pb_u: 105.7, lika_u: 51.5, lila_u: 46 },
            { bulan: 46, bb_u: 18.2, pb_u: 106.3, lika_u: 51.6, lila_u: 46 },
            { bulan: 47, bb_u: 18.4, pb_u: 106.9, lika_u: 51.6, lila_u: 46 },
            { bulan: 48, bb_u: 18.6, pb_u: 107.5, lika_u: 51.7, lila_u: 46 },
            { bulan: 49, bb_u: 18.8, pb_u: 108.1, lika_u: 51.7, lila_u: 46 },
            { bulan: 50, bb_u: 19.0, pb_u: 108.7, lika_u: 51.8, lila_u: 46 },
            { bulan: 51, bb_u: 19.2, pb_u: 109.3, lika_u: 51.8, lila_u: 46 },
            { bulan: 52, bb_u: 19.4, pb_u: 109.9, lika_u: 51.9, lila_u: 46 },
            { bulan: 53, bb_u: 19.6, pb_u: 110.5, lika_u: 51.9, lila_u: 46 },
            { bulan: 54, bb_u: 19.8, pb_u: 111.1, lika_u: 52, lila_u: 46 },
            { bulan: 55, bb_u: 20.0, pb_u: 111.7, lika_u: 52, lila_u: 46 },
            { bulan: 56, bb_u: 20.2, pb_u: 112.3, lika_u: 52.1, lila_u: 46 },
            { bulan: 57, bb_u: 20.4, pb_u: 112.8, lika_u: 52.1, lila_u: 46 },
            { bulan: 58, bb_u: 20.6, pb_u: 113.4, lika_u: 52.1, lila_u: 46 },
            { bulan: 59, bb_u: 20.8, pb_u: 114, lika_u: 52.2, lila_u: 46 },
            { bulan: 60, bb_u: 21.0, pb_u: 114.6, lika_u: 52.2, lila_u: 46 },
            // Tambahkan data sampai 60 bulan
        ]
    },
    {
        jenisKelamin: 'perempuan',
        usia: [
            { bulan: 0, bb_u: 3.2, pb_u: 49.1, lika_u: 33.9, lila_u: 46 },
            { bulan: 1, bb_u: 4.2, pb_u: 53.7, lika_u: 36.5, lila_u: 46 },
            { bulan: 2, bb_u: 5.1, pb_u: 57.1, lika_u: 38.3, lila_u: 46 },
            { bulan: 3, bb_u: 5.8, pb_u: 59.8, lika_u: 39.5, lila_u: 46 },
            { bulan: 4, bb_u: 6.4, pb_u: 62.1, lika_u: 40.6, lila_u: 46 },
            { bulan: 5, bb_u: 6.9, pb_u: 64, lika_u: 41.5, lila_u: 46 },
            { bulan: 6, bb_u: 7.3, pb_u: 65.7, lika_u: 42.2, lila_u: 46 },
            { bulan: 7, bb_u: 7.6, pb_u: 67.3, lika_u: 42.8, lila_u: 46 },
            { bulan: 8, bb_u: 7.9, pb_u: 68.7, lika_u: 43.4, lila_u: 46 },
            { bulan: 9, bb_u: 8.2, pb_u: 70.1, lika_u: 43.8, lila_u: 46 },
            { bulan: 10, bb_u: 8.5, pb_u: 71.5, lika_u: 44.2, lila_u: 46 },
            { bulan: 11, bb_u: 8.7, pb_u: 72.8, lika_u: 44.6, lila_u: 46 },
            { bulan: 12, bb_u: 8.9, pb_u: 74, lika_u: 44.9, lila_u: 46 },
            { bulan: 13, bb_u: 9.2, pb_u: 75.2, lika_u: 45.2, lila_u: 46 },
            { bulan: 14, bb_u: 9.4, pb_u: 76.4, lika_u: 45.4, lila_u: 46 },
            { bulan: 15, bb_u: 9.6, pb_u: 77.5, lika_u: 45.7, lila_u: 46 },
            { bulan: 16, bb_u: 9.8, pb_u: 78.6, lika_u: 45.9, lila_u: 46 },
            { bulan: 17, bb_u: 10, pb_u: 79.7, lika_u: 46.1, lila_u: 46 },
            { bulan: 18, bb_u: 10.2, pb_u: 80.7, lika_u: 46.2, lila_u: 46 },
            { bulan: 19, bb_u: 10.4, pb_u: 81.7, lika_u: 46.4, lila_u: 46 },
            { bulan: 20, bb_u: 10.6, pb_u: 82.7, lika_u: 46.6, lila_u: 46 },
            { bulan: 21, bb_u: 10.9, pb_u: 83.7, lika_u: 46.7, lila_u: 46 },
            { bulan: 22, bb_u: 11.1, pb_u: 84.6, lika_u: 46.9, lila_u: 46 },
            { bulan: 23, bb_u: 11.3, pb_u: 85.5, lika_u: 47, lila_u: 46 },
            { bulan: 24, bb_u: 11.5, pb_u: 86.4, lika_u: 47.2, lila_u: 46 },
            { bulan: 25, bb_u: 11.7, pb_u: 86.6, lika_u: 47.3, lila_u: 46 },
            { bulan: 26, bb_u: 11.9, pb_u: 87.4, lika_u: 47.5, lila_u: 46 },
            { bulan: 27, bb_u: 12.1, pb_u: 88.3, lika_u: 47.6, lila_u: 46 },
            { bulan: 28, bb_u: 12.3, pb_u: 89.1, lika_u: 47.7, lila_u: 46 },
            { bulan: 29, bb_u: 12.5, pb_u: 89.9, lika_u: 47.8, lila_u: 46 },
            { bulan: 30, bb_u: 12.7, pb_u: 90.7, lika_u: 47.9, lila_u: 46 },
            { bulan: 31, bb_u: 12.9, pb_u: 91.4, lika_u: 48, lila_u: 46 },
            { bulan: 32, bb_u: 13.1, pb_u: 92.2, lika_u: 48.1, lila_u: 46 },
            { bulan: 33, bb_u: 13.3, pb_u: 92.9, lika_u: 48.2, lila_u: 46 },
            { bulan: 34, bb_u: 13.5, pb_u: 93.6, lika_u: 48.3, lila_u: 46 },
            { bulan: 35, bb_u: 13.7, pb_u: 94.4, lika_u: 48.4, lila_u: 46 },
            { bulan: 36, bb_u: 13.9, pb_u: 95.1, lika_u: 48.5, lila_u: 46 },
            { bulan: 37, bb_u: 14.0, pb_u: 95.7, lika_u: 48.6, lila_u: 46 },
            { bulan: 38, bb_u: 14.2, pb_u: 96.4, lika_u: 48.7, lila_u: 46 },
            { bulan: 39, bb_u: 14.4, pb_u: 97.1, lika_u: 48.7, lila_u: 46 },
            { bulan: 40, bb_u: 14.6, pb_u: 97.7, lika_u: 48.8, lila_u: 46 },
            { bulan: 41, bb_u: 14.8, pb_u: 98.4, lika_u: 48.9, lila_u: 46 },
            { bulan: 42, bb_u: 15.0, pb_u: 99, lika_u: 49, lila_u: 46 },
            { bulan: 43, bb_u: 15.2, pb_u: 99.7, lika_u: 49, lila_u: 46 },
            { bulan: 44, bb_u: 15.3, pb_u: 100.3, lika_u: 49.1, lila_u: 46 },
            { bulan: 45, bb_u: 15.5, pb_u: 100.9, lika_u: 49.2, lila_u: 46 },
            { bulan: 46, bb_u: 15.7, pb_u: 101.5, lika_u: 49.2, lila_u: 46 },
            { bulan: 47, bb_u: 15.9, pb_u: 102.1, lika_u: 49.3, lila_u: 46 },
            { bulan: 48, bb_u: 16.1, pb_u: 102.7, lika_u: 49.3, lila_u: 46 },
            { bulan: 49, bb_u: 16.3, pb_u: 103.3, lika_u: 49.4, lila_u: 46 },
            { bulan: 50, bb_u: 16.4, pb_u: 103.9, lika_u: 49.4, lila_u: 46 },
            { bulan: 51, bb_u: 16.6, pb_u: 104.5, lika_u: 49.5, lila_u: 46 },
            { bulan: 52, bb_u: 16.8, pb_u: 105, lika_u: 49.5, lila_u: 46 },
            { bulan: 53, bb_u: 17.0, pb_u: 105.6, lika_u: 49.6, lila_u: 46 },
            { bulan: 54, bb_u: 17.2, pb_u: 106.2, lika_u: 49.6, lila_u: 46 },
            { bulan: 55, bb_u: 17.3, pb_u: 106.7, lika_u: 49.7, lila_u: 46 },
            { bulan: 56, bb_u: 17.5, pb_u: 107.3, lika_u: 49.7, lila_u: 46 },
            { bulan: 57, bb_u: 17.7, pb_u: 107.8, lika_u: 49.8, lila_u: 46 },
            { bulan: 58, bb_u: 17.9, pb_u: 108.4, lika_u: 49.8, lila_u: 46 },
            { bulan: 59, bb_u: 18, pb_u: 108.9, lika_u: 49.9, lila_u: 46 },
            { bulan: 60, bb_u: 18.2, pb_u: 109.4, lika_u: 49.9, lila_u: 46 },
            // Tambahkan data sampai 60 bulan
        ],
        z1:[ 
            { bulan: 0, bb_u: 3.7, pb_u: 51, lika_u: 35.1, lila_u: 46 },
            { bulan: 1, bb_u: 4.8, pb_u: 55.6, lika_u: 37.7, lila_u: 46 },
            { bulan: 2, bb_u: 5.8, pb_u: 59.1, lika_u: 39.5, lila_u: 46 },
            { bulan: 3, bb_u: 6.6, pb_u: 61.9, lika_u: 40.8, lila_u: 46 },
            { bulan: 4, bb_u: 7.3, pb_u: 64.3, lika_u: 41.8, lila_u: 46 },
            { bulan: 5, bb_u: 7.8, pb_u: 66.2, lika_u: 42.7, lila_u: 46 },
            { bulan: 6, bb_u: 8.2, pb_u: 68, lika_u: 43.5, lila_u: 46 },
            { bulan: 7, bb_u: 8.6, pb_u: 69.6, lika_u: 44.1, lila_u: 46 },
            { bulan: 8, bb_u: 9.0, pb_u: 71.1, lika_u: 44.7, lila_u: 46 },
            { bulan: 9, bb_u: 9.3, pb_u: 72.6, lika_u: 45.2, lila_u: 46 },
            { bulan: 10, bb_u: 9.6, pb_u: 73.9, lika_u: 45.6, lila_u: 46 },
            { bulan: 11, bb_u: 9.9, pb_u: 75.3, lika_u: 45.9, lila_u: 46 },
            { bulan: 12, bb_u: 10.1, pb_u: 76.6, lika_u: 46.3, lila_u: 46 },
            { bulan: 13, bb_u: 10.4, pb_u: 77.8, lika_u: 46.5, lila_u: 46 },
            { bulan: 14, bb_u: 10.6, pb_u: 79.1, lika_u: 46.8, lila_u: 46 },
            { bulan: 15, bb_u: 10.9, pb_u: 80.2, lika_u: 47, lila_u: 46 },
            { bulan: 16, bb_u: 11.1, pb_u: 81.4, lika_u: 47.2, lila_u: 46 },
            { bulan: 17, bb_u: 11.4, pb_u: 82.5, lika_u: 47.4, lila_u: 46 },
            { bulan: 18, bb_u: 11.6, pb_u: 83.6, lika_u: 47.6, lila_u: 46 },
            { bulan: 19, bb_u: 11.8, pb_u: 84.7, lika_u: 47.8, lila_u: 46 },
            { bulan: 20, bb_u: 12.1, pb_u: 85.7, lika_u: 48, lila_u: 46 },
            { bulan: 21, bb_u: 12.3, pb_u: 86.7, lika_u: 48.1, lila_u: 46 },
            { bulan: 22, bb_u: 12.5, pb_u: 87.7, lika_u: 48.3, lila_u: 46 },
            { bulan: 23, bb_u: 12.8, pb_u: 88.7, lika_u: 48.4, lila_u: 46 },
            { bulan: 24, bb_u: 13.0, pb_u: 89.6, lika_u: 48.6, lila_u: 46 },
            { bulan: 25, bb_u: 13.3, pb_u: 89.9, lika_u: 48.7, lila_u: 46 },
            { bulan: 26, bb_u: 13.5, pb_u: 90.8, lika_u: 48.9, lila_u: 46 },
            { bulan: 27, bb_u: 13.7, pb_u: 91.7, lika_u: 49, lila_u: 46 },
            { bulan: 28, bb_u: 14.0, pb_u: 92.5, lika_u: 49.1, lila_u: 46 },
            { bulan: 29, bb_u: 14.2, pb_u: 93.4, lika_u: 49.2, lila_u: 46 },
            { bulan: 30, bb_u: 14.4, pb_u: 94.2, lika_u: 49.3, lila_u: 46 },
            { bulan: 31, bb_u: 14.7, pb_u: 95, lika_u: 49.4, lila_u: 46 },
            { bulan: 32, bb_u: 14.9, pb_u: 95.8, lika_u: 49.6, lila_u: 46 },
            { bulan: 33, bb_u: 15.1, pb_u: 96.6, lika_u: 49.7, lila_u: 46 },
            { bulan: 34, bb_u: 15.4, pb_u: 97.4, lika_u: 49.7, lila_u: 46 },
            { bulan: 35, bb_u: 15.6, pb_u: 98.1, lika_u: 49.8, lila_u: 46 },
            { bulan: 36, bb_u: 15.8, pb_u: 98.9, lika_u: 49.9, lila_u: 46 },
            { bulan: 37, bb_u: 16.0, pb_u: 99.6, lika_u: 50, lila_u: 46 },
            { bulan: 38, bb_u: 16.3, pb_u: 100.3, lika_u: 50.1, lila_u: 46 },
            { bulan: 39, bb_u: 16.5, pb_u: 101, lika_u: 50.2, lila_u: 46 },
            { bulan: 40, bb_u: 16.7, pb_u: 101.7, lika_u: 50.2, lila_u: 46 },
            { bulan: 41, bb_u: 16.9, pb_u: 102.4, lika_u: 50.3, lila_u: 46 },
            { bulan: 42, bb_u: 17.2, pb_u: 103.1, lika_u: 50.4, lila_u: 46 },
            { bulan: 43, bb_u: 17.4, pb_u: 103.8, lika_u: 50.4, lila_u: 46 },
            { bulan: 44, bb_u: 17.6, pb_u: 104.5, lika_u: 50.5, lila_u: 46 },
            { bulan: 45, bb_u: 17.8, pb_u: 105.1, lika_u: 50.6, lila_u: 46 },
            { bulan: 46, bb_u: 18.1, pb_u: 105.8, lika_u: 50.6, lila_u: 46 },
            { bulan: 47, bb_u: 18.3, pb_u: 106.4, lika_u: 50.7, lila_u: 46 },
            { bulan: 48, bb_u: 18.5, pb_u: 107, lika_u: 50.8, lila_u: 46 },
            { bulan: 49, bb_u: 18.8, pb_u: 107.7, lika_u: 50.8, lila_u: 46 },
            { bulan: 50, bb_u: 19.0, pb_u: 108.3, lika_u: 50.9, lila_u: 46 },
            { bulan: 51, bb_u: 19.2, pb_u: 108.9, lika_u: 50.9, lila_u: 46 },
            { bulan: 52, bb_u: 19.4, pb_u: 109.5, lika_u: 51, lila_u: 46 },
            { bulan: 53, bb_u: 19.7, pb_u: 110.1, lika_u: 51, lila_u: 46 },
            { bulan: 54, bb_u: 19.9, pb_u: 110.7, lika_u: 51.1, lila_u: 46 },
            { bulan: 55, bb_u: 20.1, pb_u: 111.3, lika_u: 51.1, lila_u: 46 },
            { bulan: 56, bb_u: 20.3, pb_u: 111.9, lika_u: 51.2, lila_u: 46 },
            { bulan: 57, bb_u: 20.6, pb_u: 112.5, lika_u: 51.2, lila_u: 46 },
            { bulan: 58, bb_u: 20.8, pb_u: 113, lika_u: 51.3, lila_u: 46 },
            { bulan: 59, bb_u: 21, pb_u: 113.6, lika_u: 51.3, lila_u: 46 },
            { bulan: 60, bb_u: 21.2, pb_u: 114.2, lika_u: 51.3, lila_u: 46 }, ],
        z0:[ 
            { bulan: 0, bb_u: 2.8, pb_u: 47.3, lika_u: 32.7, lila_u: 46 },
            { bulan: 1, bb_u: 3.6, pb_u: 51.7, lika_u: 35.4, lila_u: 46 },
            { bulan: 2, bb_u: 4.5, pb_u: 55, lika_u: 37, lila_u: 46 },
            { bulan: 3, bb_u: 5.2, pb_u: 57.7, lika_u: 38.3, lila_u: 46 },
            { bulan: 4, bb_u: 5.7, pb_u: 59.9, lika_u: 39.3, lila_u: 46 },
            { bulan: 5, bb_u: 6.1, pb_u: 61.8, lika_u: 40.2, lila_u: 46 },
            { bulan: 6, bb_u: 6.5, pb_u: 63.5, lika_u: 40.9, lila_u: 46 },
            { bulan: 7, bb_u: 6.8, pb_u: 65, lika_u: 41.5, lila_u: 46 },
            { bulan: 8, bb_u: 7.0, pb_u: 66.4, lika_u: 42, lila_u: 46 },
            { bulan: 9, bb_u: 7.3, pb_u: 67.7, lika_u: 42.5, lila_u: 46 },
            { bulan: 10, bb_u: 7.5, pb_u: 69, lika_u: 42.9, lila_u: 46 },
            { bulan: 11, bb_u: 7.7, pb_u: 70.3, lika_u: 43.2, lila_u: 46 },
            { bulan: 12, bb_u: 7.9, pb_u: 71.4, lika_u: 43.5, lila_u: 46 },
            { bulan: 13, bb_u: 8.1, pb_u: 72.6, lika_u: 43.8, lila_u: 46 },
            { bulan: 14, bb_u: 8.3, pb_u: 73.7, lika_u: 44.1, lila_u: 46 },
            { bulan: 15, bb_u: 8.5, pb_u: 74.8, lika_u: 44.3, lila_u: 46 },
            { bulan: 16, bb_u: 8.7, pb_u: 75.8, lika_u: 44.5, lila_u: 46 },
            { bulan: 17, bb_u: 8.9, pb_u: 76.8, lika_u: 44.7, lila_u: 46 },
            { bulan: 18, bb_u: 9.1, pb_u: 77.8, lika_u: 44.9, lila_u: 46 },
            { bulan: 19, bb_u: 9.2, pb_u: 78.8, lika_u: 45, lila_u: 46 },
            { bulan: 20, bb_u: 9.4, pb_u: 79.7, lika_u: 45.2, lila_u: 46 },
            { bulan: 21, bb_u: 9.6, pb_u: 80.6, lika_u: 45.3, lila_u: 46 },
            { bulan: 22, bb_u: 9.8, pb_u: 81.5, lika_u: 45.5, lila_u: 46 },
            { bulan: 23, bb_u: 10, pb_u: 82.3, lika_u: 45.6, lila_u: 46 },
            { bulan: 24, bb_u: 10.2, pb_u: 83.2, lika_u: 45.8, lila_u: 46 },
            { bulan: 25, bb_u: 10.3, pb_u: 83.3, lika_u: 45.9, lila_u: 46 },
            { bulan: 26, bb_u: 10.5, pb_u: 84.1, lika_u: 46.1, lila_u: 46 },
            { bulan: 27, bb_u: 10.7, pb_u: 84.9, lika_u: 46.2, lila_u: 46 },
            { bulan: 28, bb_u: 10.9, pb_u: 85.7, lika_u: 46.3, lila_u: 46 },
            { bulan: 29, bb_u: 11.1, pb_u: 86.4, lika_u: 46.4, lila_u: 46 },
            { bulan: 30, bb_u: 11.2, pb_u: 87.1, lika_u: 46.5, lila_u: 46 },
            { bulan: 31, bb_u: 11.4, pb_u: 87.9, lika_u: 46.6, lila_u: 46 },
            { bulan: 32, bb_u: 11.6, pb_u: 88.6, lika_u: 46.7, lila_u: 46 },
            { bulan: 33, bb_u: 11.7, pb_u: 89.3, lika_u: 46.8, lila_u: 46 },
            { bulan: 34, bb_u: 11.9, pb_u: 89.9, lika_u: 46.9, lila_u: 46 },
            { bulan: 35, bb_u: 12.0, pb_u: 90.6, lika_u: 47, lila_u: 46 },
            { bulan: 36, bb_u: 12.2, pb_u: 91.2, lika_u: 47.1, lila_u: 46 },
            { bulan: 37, bb_u: 12.4, pb_u: 91.9, lika_u: 47.2, lila_u: 46 },
            { bulan: 38, bb_u: 12.5, pb_u: 92.5, lika_u: 47.3, lila_u: 46 },
            { bulan: 39, bb_u: 12.7, pb_u: 93.1, lika_u: 47.3, lila_u: 46 },
            { bulan: 40, bb_u: 12.8, pb_u: 93.8, lika_u: 47.4, lila_u: 46 },
            { bulan: 41, bb_u: 13, pb_u: 94.4, lika_u: 47.5, lila_u: 46 },
            { bulan: 42, bb_u: 13.1, pb_u: 95, lika_u: 47.5, lila_u: 46 },
            { bulan: 43, bb_u: 13.3, pb_u: 95.6, lika_u: 47.6, lila_u: 46 },
            { bulan: 44, bb_u: 13.4, pb_u: 96.2, lika_u: 47.7, lila_u: 46 },
            { bulan: 45, bb_u: 13.6, pb_u: 96.7, lika_u: 47.7, lila_u: 46 },
            { bulan: 46, bb_u: 13.7, pb_u: 97.3, lika_u: 47.8, lila_u: 46 },
            { bulan: 47, bb_u: 13.9, pb_u: 97.9, lika_u: 47.9, lila_u: 46 },
            { bulan: 48, bb_u: 14.0, pb_u: 98.4, lika_u: 47.9, lila_u: 46 },
            { bulan: 49, bb_u: 14.2, pb_u: 99, lika_u: 48, lila_u: 46 },
            { bulan: 50, bb_u: 14.3, pb_u: 99.5, lika_u: 48, lila_u: 46 },
            { bulan: 51, bb_u: 14.5, pb_u: 100.1, lika_u: 48.1, lila_u: 46 },
            { bulan: 52, bb_u: 14.6, pb_u: 100.6, lika_u: 48.1, lila_u: 46 },
            { bulan: 53, bb_u: 14.8, pb_u: 101.1, lika_u: 48.2, lila_u: 46 },
            { bulan: 54, bb_u: 14.9, pb_u: 101.6, lika_u: 48.2, lila_u: 46 },
            { bulan: 55, bb_u: 15.1, pb_u: 102.2, lika_u: 48.3, lila_u: 46 },
            { bulan: 56, bb_u: 15.2, pb_u: 102.7, lika_u: 48.3, lila_u: 46 },
            { bulan: 57, bb_u: 15.3, pb_u: 103.2, lika_u: 48.4, lila_u: 46 },
            { bulan: 58, bb_u: 15.5, pb_u: 103.7, lika_u: 48.4, lila_u: 46 },
            { bulan: 59, bb_u: 15.6, pb_u: 104.2, lika_u: 48.5, lila_u: 46 },
            { bulan: 60, bb_u: 15.8, pb_u: 104.7, lika_u: 48.5, lila_u: 46 },
        ]
    }
];