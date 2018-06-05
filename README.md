# Kissanime-Download-Script
I made this script to replace https://github.com/Eltion/Kissanime-Downloader after it stopped working since kissanime updated the captchas
on their site. It is pretty unintuitive... but I will try to explain how to use it to the best of my abilities.

### Notice
To use this script you need Internet Download Manager (found here https://www.internetdownloadmanager.com/) or some similar
download management software.

### Step by Step
1. Go to https://kissanime.ru and open the console (ctrl + shift + I)

2. Run the command `$.getScript("https://rawgit.com/Samuel-Rochette/Kissanime-Download-Script/master/index.js")`

3. You will first be prompted for the "Anime Url". This is the name of the anime you want to download as it appears in the url on the top
  of the page. For http://kissanime.ru/Anime/Boku-no-Hero-Academia-3rd-Season you would enter "Boku-no-Hero-Academia-3rd-Season". You can
  copy and paste this.
  
4. Next you will be prompted for the Anime Name. This is the name of the anime as it appears on the page itself. For
    http://kissanime.ru/Anime/Boku-no-Hero-Academia-3rd-Season you would enter "My Hero Academia 3"
    
5. Thirdly, you will be prompted for the "First Episode". This is the first episode you would like to download

6. You will then be prompted for the "Last Episode". This is the last episode you would like to download

7. Afterwards you will be asked for the "First Episode (Actual)". This is the number for the first episode as it appears on the page.
  Most of the time this number will be "1", but for some ongoing series' that go on for multiple seasons it can be a different number.
  For http://kissanime.ru/Anime/Boku-no-Hero-Academia-3rd-Season this number would be "39"
  
8. Next you will be asked if the anime is available as both a Sub and a Dub. For this value you simply need to write "true" or "false".
  if the anime has (Sub) or (Dub) in it's title you write "true" otherwise you write false.
  for http://kissanime.ru/Anime/Boku-no-Hero-Academia-3rd-Season you would write "true"
  
9. If you filled everything out correctly this should produce an array of numbers and letters in the console

10. Go to https://www.rapidvideo.com/ and open the console

11. Copy, Paste, but **DO NOT RUN** the following command `$.getScript("https://rawgit.com/Samuel-Rochette/Kissanime-Download-Script/master/rapidvideo.js`

12. Go back to the console on kissanime and copy the array of letters in numbers. **IMPORTANT** Make sure you copy them in such a way that
  they are not wraped in quotes. They should look like this `FF2WYA0CC4", "FF1X1PXJH4", "FF1X1R62JA`

13. Go back to the console on rapidvideo and run the command you pasted there earlier

14. You will prompted to "Copy Paste List". Paste the list you just copied from the other console and hit the Enter key

15. The Script will log the urls for all the mp4 files you want to download. Once it is finished you want to type "VideoList" into the console.
  This will generate an array of all the files you want to download.

16. Click the dropdown arrow on the array to reveal all the files and copy them to your clipboard

17. Open Internet Download Manager, click Tasks, then click the option "add batch download from clipboard". From here you can chose
  where and how you want to save your the videos.
