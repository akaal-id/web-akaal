import { supabase } from './supabase'

export interface HeroImage {
  id: string
  url: string
  alt: string
  order: number
}

// Fetch from Hero table
export async function getHeroImages(): Promise<HeroImage[]> {
  try {
    console.log('🔍 Attempting to fetch hero images from Supabase...')
    
    const { data, error } = await supabase
      .from('hero')  // Changed from 'Hero' to 'hero' (lowercase)
      .select('*')
      .order('id', { ascending: true })  // Changed from 'order' to 'id'

    console.log('📊 Supabase response:', { data, error })
    console.log('📋 Raw data from Hero table:', data)

    if (error) {
      console.error('❌ Error fetching hero images from Hero table:', error)
      return []
    }

    if (!data || data.length === 0) {
      console.warn('⚠️ No hero images found in Hero table')
      console.log('💡 This means your Hero table is empty. Add some data to see images!')
      return []
    }

    console.log('✅ Successfully fetched', data.length, 'hero images')
    console.log('🔄 Transforming data...')

    // Transform the data to match our interface
    const transformedImages = data.map((item: any, index: number) => {
      const transformed = {
        id: item.id.toString(),  // Convert id to string
        url: item.img,  // Use 'img' column for URL
        alt: `Hero Image ${item.id}`,  // Generate alt text from id
        order: item.id  // Use id for ordering
      }
      console.log(`📸 Image ${index + 1}:`, transformed)
      return transformed
    })

    console.log('🎯 Final transformed images:', transformedImages)
    return transformedImages
  } catch (error) {
    console.error('💥 Error in getHeroImages:', error)
    return []
  }
} 