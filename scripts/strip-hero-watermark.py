#!/usr/bin/env python3
"""
Remove marca d'água no canto inferior direito (ex.: ícone Gemini) recuando
textura da faixa imediatamente acima do recorte.

Uso:
  1. Salve o PNG original como public/images/hero-trator-john-deere-source.png
  2. python scripts/strip-hero-watermark.py
  3. Gera public/images/hero-trator-john-deere.png

Requer: pip install pillow
"""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "images" / "hero-trator-john-deere-source.png"
OUT = ROOT / "public" / "images" / "hero-trator-john-deere.png"


def main() -> None:
    try:
        from PIL import Image
    except ImportError:
        print("Instale Pillow: pip install pillow", file=sys.stderr)
        sys.exit(1)

    src_path = Path(sys.argv[1]) if len(sys.argv) > 1 else SRC
    out_path = Path(sys.argv[2]) if len(sys.argv) > 2 else OUT

    if not src_path.is_file():
        print(f"Arquivo não encontrado: {src_path}", file=sys.stderr)
        sys.exit(1)

    img = Image.open(src_path).convert("RGB")

    w, h = img.size
    # Área típica do selo Gemini no canto inferior direito (~% da imagem).
    pw = max(48, int(w * 0.12))
    ph = max(40, int(h * 0.09))
    x0, y0 = w - pw, h - ph
    band_h = min(ph + 8, y0)
    band_top = max(0, y0 - band_h)
    band = img.crop((x0, band_top, w, y0))
    band = band.resize((pw, ph), Image.Resampling.LANCZOS)
    img.paste(band, (x0, y0))
    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path, "PNG", optimize=True)
    print(f"OK → {out_path}")


if __name__ == "__main__":
    main()
