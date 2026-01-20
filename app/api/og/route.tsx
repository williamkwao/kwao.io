import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);

  // Get parameters with defaults
  const title = searchParams.get('title') || 'William Kwao';
  const rawDescription = searchParams.get('description') || '';
  const type = searchParams.get('type') || 'default'; // home, blog, post, default

  // Truncate description if too long (max 120 characters)
  const maxLength = 120;
  const description = rawDescription.length > maxLength
    ? rawDescription.slice(0, maxLength).trim() + '...'
    : rawDescription;

  // Customize based on type
  const isPost = type === 'post';

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
          alignItems: 'center',
          justifyContent: 'space-between',
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

        {/* Left side - Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            maxWidth: 700,
            paddingRight: 40,
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: isPost ? 48 : 64,
              fontWeight: 600,
              color: '#000000',
              lineHeight: 1.2,
              marginBottom: description ? 20 : 0,
              display: 'flex',
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: 24,
                color: '#666666',
                lineHeight: 1.4,
                display: 'flex',
              }}
            >
              {description}
            </div>
          )}
        </div>

        {/* Right side - Avatar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={avatarUrl}
            alt=""
            style={{
              width: 280,
              height: 280,
            }}
          />
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 60,
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <div style={{ fontSize: 24, color: '#999999' }}>•</div>
              <div style={{ fontSize: 24, color: '#666666' }}>William Kwao</div>
            </div>
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
