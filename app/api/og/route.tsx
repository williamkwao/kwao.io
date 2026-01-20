import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Get parameters with defaults
  const title = searchParams.get('title') || 'William Kwao';
  const description = searchParams.get('description') || '';
  const type = searchParams.get('type') || 'default'; // home, blog, post, default

  // Customize based on type
  const isHome = type === 'home';
  const isPost = type === 'post';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: 60,
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            backgroundColor: '#000000',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: 1000,
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: isPost ? 56 : 72,
              fontWeight: 600,
              color: '#000000',
              lineHeight: 1.2,
              marginBottom: description ? 24 : 0,
              display: 'flex',
              textAlign: 'center',
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: 28,
                color: '#666666',
                lineHeight: 1.4,
                display: 'flex',
                textAlign: 'center',
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: '#000000',
              fontWeight: 500,
            }}
          >
            kwao.io
          </div>
          {isPost && (
            <>
              <div style={{ fontSize: 24, color: '#999999' }}>•</div>
              <div style={{ fontSize: 24, color: '#666666' }}>William Kwao</div>
            </>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
