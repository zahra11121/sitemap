import json


def gabung_dan_bersihkan_json(file_kota, file_kawasan, file_output):
  try:
    # Membaca file kota.json
    with open(file_kota, "r", encoding="utf-8") as f:
      data_kota = json.load(f)

    # Membaca file kawasan.json
    with open(file_kawasan, "r", encoding="utf-8") as f:
      data_kawasan = json.load(f)

    # Gabungkan kedua list data
    gabungan = data_kota + data_kawasan

    # Gunakan dictionary untuk memfilter id yang unik
    # (Jika ada id yang sama, data terakhir akan menimpa data sebelumnya)
    data_unik = {}
    for item in gabungan:
      id_item = item.get("id")
      if id_item:
        data_unik[id_item] = item

    # Kembalikan bentuknya menjadi list
    hasil_akhir = list(data_unik.values())

    # Simpan ke file JSON baru
    with open(file_output, "w", encoding="utf-8") as f:
      json.dump(hasil_akhir, f, indent=4, ensure_ascii=False)

    print(
        f"Sukses! Total data bersih setelah dibuang yang kembar: {len(hasil_akhir)}"
        f" item."
    )

  except Exception as e:
    print(f"Terjadi kesalahan: {e}")


# --- CARA PAKAI ---
# Ganti 'kota.json' dan 'kawasan.json' dengan nama file Anda yang sebenarnya
gabung_dan_bersihkan_json("kota.json", "kawasan.json", "hasil_gabungan.json")