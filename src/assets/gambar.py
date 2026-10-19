from pathlib import Path

folder_path = Path(r"C:\Users\user\Desktop\greenfresh\src\assets\products")

if folder_path.exists():
    # Ambil semua gambar
    extensions = {'.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp'}
    gambar_files = [f for f in folder_path.iterdir() 
                    if f.is_file() and f.suffix.lower() in extensions]
    
    for gambar in gambar_files:
        print(f"Nama   : {gambar.name}")
        print(f"Path   : {gambar}")
        print(f"Absolute: {gambar.absolute()}")
        print("-" * 50)
else:
    print("Folder tidak ditemukan!")