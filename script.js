const colabUrl =
  "https://colab.research.google.com/drive/15ecuh8WleBc0iw5NnXGlD028cnrb33XJ?usp=sharing";

const copyButton = document.getElementById("copy-link");
const feedback = document.getElementById("copy-feedback");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(colabUrl);
    feedback.textContent = "Enllaç copiat. Ja el pots enganxar on vulguis.";
  } catch (error) {
    feedback.textContent =
      "No s'ha pogut copiar automàticament. Fes servir el boto principal per obrir-lo.";
  }
});
