export const downloadFile = (fileName, data) => {
  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');

  link.style.display = 'none';
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);
}
