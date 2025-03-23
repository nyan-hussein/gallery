## Uploading a New Image

To upload a new image, follow these steps:

1. Prepare **two images**:
   - One **high-quality image** (large file size).  
   - One **low-quality image** (must be **less than 500KB**).  

2. **Save the images** in the correct folders:
   - **High-quality image** → `h-im` folder  
   - **Low-quality image** → `l-im` folder  

3. **Rename both images (same name!)** based on the last sequence number in the folder.  
   Example: If the last image in the folder is **`9.jpg`**, name both images as:  
   - **High-quality image** → `10.jpg`  
   - **Low-quality image** → `10.jpg`  

4. Open **`Script.js`** and update **`imageNumber`** on **line 2** with the new image number.


## Important Notes
- **Do not make a mess in the sequence of image names.**  
- **There must be no gaps in numbering.**  
- **Both folders (`h-im` and `l-im`) must be synchronized in naming and numbering.**  
- **for best preformance make the low-quality image 150kb or less**

## Deleting an Image
If you need to delete an image, you must:
1.**Replace it with another image using the same name**.  
2. **Or ensure that deletion does not create a gap in the sequence**.  

