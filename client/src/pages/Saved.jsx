import React, { useEffect, useState } from "react";
import '../styles/Saved.css'
import SeedPack from '../components/SeedPack'

    const testResult = [
    {
        "name": "Eastern Red Cedar",
        "scientificName": "Juniperus virginiana",
        "season": "Winter, Early Spring",
        "care": "Plant bare-root or balled-and-burlapped specimens in well-draining soil. Space 15-20 feet apart. Tolerates drought once established; minimal pruning needed. Full sun preferred (6+ hours). Monitor for cedar-apple rust in humid conditions. Excellent wind tolerance for farm settings.",
        "funFact": "Provides winter shelter and persistent berries for cedar waxwings and robins; aromatic wood historically used for closets and chests.",
        "growingZones": "2-9",
        "type": "tree"
    },
    {
        "name": "Winterberry Holly",
        "scientificName": "Ilex verticillata",
        "season": "Winter, Early Spring",
        "care": "Plant in moist, acidic soil with part shade to full sun. Space 4-6 feet apart. Requires both male and female plants for fruit production; interplant accordingly. Minimal pruning; prune after berry display fades. Deep watering during dry spells supports berry production.",
        "funFact": "Brilliant red berries persist through winter, providing critical food for migrating birds when natural sources are scarce.",
        "growingZones": "3-9",
        "type": "shrub"
    },
    {
        "name": "Black-eyed Susan",
        "scientificName": "Rudbeckia fulgida",
        "season": "Winter (seeds), Spring (transplants)",
        "care": "Extremely low-maintenance for experts; direct-seed in late fall for winter stratification. Full sun, well-draining soil. Once established, drought-tolerant. Deadhead for extended blooms or allow self-seeding. Divides easily every 3-4 years. No fertilizer needed.",
        "funFact": "Goldfinches rely on seed heads for autumn and winter nutrition; prolific self-seeder that naturally expands plantings.",
        "growingZones": "3-9",
        "type": "flower"
    },
    {
        "name": "Christmas Fern",
        "scientificName": "Polystichum acrostichoides",
        "season": "Winter, Fall",
        "care": "Thrives in moist, well-draining soil rich in organic matter. Dappled to deep shade. Space 12-18 inches apart. Evergreen; minimal maintenance. Plant with crown at soil level. Mulch lightly. No fertilizer required. Naturally occurs on forest floors—recreate similar conditions.",
        "funFact": "Evergreen fronds remain vibrant through winter, providing shelter for beneficial insects; historically used as Christmas greenery.",
        "growingZones": "3-9",
        "type": "fern"
    },
    {
        "name": "New England Aster",
        "scientificName": "Symphyotrichum novae-angliae",
        "season": "Winter (seeds), Spring (transplants)",
        "care": "Full sun to part shade; well-draining, slightly moist soil. Space 24-36 inches apart. Tall cultivar; stake if needed in exposed farm areas. Prune back in late summer for bushier growth. Divide every 2-3 years. Drought-tolerant once established. Attracts pollinators late in season.",
        "funFact": "Provides crucial late-season nectar for monarch butterflies during fall migration; prolific bloomer that creates stunning naturalized displays.",
        "growingZones": "3-8",
        "type": "flower"
    },
    {
        "name": "Coral Honeysuckle",
        "scientificName": "Lonicera sempervirens",
        "season": "Winter, Early Spring",
        "care": "Plant in full sun to part shade; well-draining soil. Provide trellis, fence, or sturdy structure. Space 6-8 feet apart for mature spread. Prune after flowering to maintain shape and encourage dense growth. Water regularly first year; moderate water needs thereafter. Minimal pest issues.",
        "funFact": "Tubular red flowers attract hummingbirds; native vine that outcompetes invasive Japanese honeysuckle when established densely.",
        "growingZones": "4-9",
        "type": "vine"
    },
    {
        "name": "Blazing Star (Liatris)",
        "scientificName": "Liatris spicata",
        "season": "Winter (seeds), Spring (transplants)",
        "care": "Extremely drought-tolerant specialist plant. Full sun, sandy to well-draining soil. Space 12-18 inches apart. Sow seeds in fall for winter stratification; expect germination in spring. No deadheading needed if self-seeding desired. Divide clumps every 3-4 years. Minimal water once established.",
        "funFact": "Blooms bottom-to-top; highly attractive to butterfly species including swallowtails; dense plantings create striking vertical interest.",
        "growingZones": "3-9",
        "type": "flower"
    },
    {
        "name": "River Oats (Upstream Sedge)",
        "scientificName": "Chasmanthium latifolium",
        "season": "Fall, Winter",
        "care": "Tolerates part shade to dappled sun; prefers moist, well-draining soil with organic matter. Space 18-24 inches apart. Drought-tolerant once established. Ornamental seed heads persist into winter. Cut back in late winter before new growth. Spreading slowly via rhizomes; excellent for erosion control on farm property.",
        "funFact": "Native grass that provides seed for songbirds and nesting material for ground-nesting birds; drooping seed heads create movement and winter interest.",
        "growingZones": "5-9",
        "type": "groundcover"
    }
]

function Saved() {
     const [plants, setPlants] = useState(testResult)
    
        useEffect(() => {
            fetch(`_______`)
            .then((res) => res.json())
            .then((data) => setPlants(data)) //Async/Await Possibly
            .catch((err) => console.error('Error fetching Seed Packets:', err));
        }, []);

        return (
            <main>
                <h2>Your Saved Seeds!</h2>
                {plants.map((p, i) => (
                    <div key={i}>
                        <SeedPack plant={p}/>
                    </div>
                ))}
            </main>
        )
    }

export default Saved;