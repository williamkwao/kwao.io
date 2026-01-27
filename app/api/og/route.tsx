import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

// Use Node.js runtime for reliable font loading
export const runtime = 'nodejs';

// Cache fonts in memory after first load
let interBold: ArrayBuffer | null = null;
let interMedium: ArrayBuffer | null = null;

async function loadFonts() {
  if (!interBold || !interMedium) {
    const fontsDir = join(process.cwd(), 'public', 'fonts');
    const [boldBuffer, mediumBuffer] = await Promise.all([
      readFile(join(fontsDir, 'Inter-Bold.ttf')),
      readFile(join(fontsDir, 'Inter-Medium.ttf')),
    ]);
    interBold = boldBuffer.buffer.slice(
      boldBuffer.byteOffset,
      boldBuffer.byteOffset + boldBuffer.byteLength
    );
    interMedium = mediumBuffer.buffer.slice(
      mediumBuffer.byteOffset,
      mediumBuffer.byteOffset + mediumBuffer.byteLength
    );
  }
  return { interBold, interMedium };
}

export async function GET(request: NextRequest) {
  const fonts = await loadFonts();

  const { searchParams, origin } = new URL(request.url);

  // Get parameters with defaults
  const title = searchParams.get('title') || 'William Kwao';

  // Dynamic font size based on title length
  const getTitleFontSize = (text: string) => {
    const len = text.length;
    if (len < 25) return 72;  // Short titles - big and bold
    if (len < 50) return 60;  // Medium titles
    if (len < 80) return 52;  // Longer titles
    return 44;                 // Very long titles
  };

  const titleFontSize = getTitleFontSize(title);

  // Avatar image URL
  const avatarUrl = `${origin}/images/avatar.svg`;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#FAFAF9',
          fontFamily: 'Inter',
        }}
      >
        {/* Left side - Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flex: 1,
            padding: 60,
            paddingRight: 40,
            backgroundColor: '#1C1917',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: titleFontSize,
              fontWeight: 700,
              color: '#FAFAF9',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              display: 'flex',
              maxWidth: 650,
            }}
          >
            {title}
          </div>

        </div>

        {/* Right side - Avatar with branding above */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            backgroundColor: '#FAFAF9',
          }}
        >
          {/* Branding above avatar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              padding: 32,
              paddingBottom: 0,
            }}
          >
            <div
              style={{
                fontSize: 36,
                color: '#1C1917',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              William Kwao
            </div>
            <div
              style={{
                fontSize: 18,
                color: '#57534E',
                fontWeight: 500,
                marginTop: 6,
              }}
            >
              Software Engineer & Writer
            </div>
            <div
              style={{
                fontSize: 16,
                color: '#A8A29E',
                fontWeight: 500,
                marginTop: 4,
              }}
            >
              kwao.io
            </div>
          </div>

          <img
            src={avatarUrl}
            alt=""
            style={{
              height: 400,
              width: 400,
              marginBottom: '-70px',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fonts.interBold!,
          weight: 700,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fonts.interMedium!,
          weight: 500,
          style: 'normal',
        },
      ],
    }
  );
}
